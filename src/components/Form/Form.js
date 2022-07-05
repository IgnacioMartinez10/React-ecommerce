import { useState } from "react";
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";
import { ClipLoader } from 'react-spinners';
import CartContext from "../../Context/CartContext";
import { db } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import './Form.css';


const Form = () => {

    const { cart, cleanCart, getTotal } = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const [buyer, setBuyer] = useState({
        name: '',
        surname: '',
        email: '',
        address: '',
        phone: '',
        comment: ''
    })

    const createOrder = () => {

        setLoading(true)

        const objOrder = {
            buyer,
            items: cart,
            total: getTotal()
        }

        const ids = cart.map(item => item.id)

        const batch = writeBatch(db)

        const outOfStock = []

        const collectionRef = collection(db, 'productStock')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()

                    const prodQuantity = cart.find(item => item.id === doc.id)?.quantity

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(db, 'orders')

                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ type: 'out_of_stock', products: outOfStock })
                }

            }).then(({ id }) => {
                batch.commit()
                cleanCart()
                navigate('/')
                Swal.fire({
                    icon: 'success',
                    title: 'La compra se realizo con exito',
                    text: `El id de la orden es: ${id}`,
                })

            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No tenemos suficiente stock',
                })
            }).finally(() => {
                setLoading(false)
            })
    }

    const { register, handleSubmit } = useForm();


    const handleChange = (e) => {
        const { name, value } = e.target
        setBuyer((buyer) => {
            return { ...buyer, [name]: value }
        })
    }

    if (loading) {
        return (
            <ClipLoader />
        )
    }
    return (
        <div>
            <div>
                <h2>Dejanos tus datos para poder enviarte los productos! </h2>
                <form onSubmit={handleSubmit(createOrder)} >
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={buyer.name}
                        placeholder="Ingrese su nombre"
                        {...register("name", { required: true, maxLength: 80 })}
                        onChange={handleChange}
                    />
                    <label>Apellido:</label>
                    <input
                        type="text"
                        name="surname"
                        value={buyer.surname}
                        placeholder="Ingrese su apellido"
                        {...register("surname", { required: true, maxLength: 80 })}
                        onChange={handleChange}
                    />
                    <label>Mail:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={buyer.email}
                        placeholder="example@example.com"
                        {...register("email", { required: true })}
                        onChange={handleChange}
                    />
                    <label>Direccion:</label>
                    <input
                        type="text"
                        name="address"
                        value={buyer.address}
                        placeholder="Ejemplo: Av Callao 235"
                        {...register("address", { required: true })}
                        onChange={handleChange}
                    />
                    <label>Telefono:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={buyer.phone}
                        placeholder="Ejemplo: 1124563215"
                        {...register("phone", { required: true })}
                        onChange={handleChange}
                    />
                    <label>Comentario:</label>
                    <textarea
                        type="textArea"
                        name="comment"
                        value={buyer.comment}
                        placeholder="Ingrese su comentario. Ejemplo: 'Casa de rejas negras' "
                        {...register("comment")}
                        onChange={handleChange}
                    />
                    <button type="submit" className="button"> Finalizar compra</button>
                </form>
            </div>
        </div>
    );

}

export default Form
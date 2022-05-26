const productStock = [

    {
        id: 1,
        name: "Vaso Coffe ST",
        price: 900,
        img: "../images/VasoCoffe.jpg",
        desc: "Vaso de plastico doble capa con banda de silicona",
        stock: 10,
        category: "Coffee"
    },
    {
        id: 2,
        name: "Mate Autocebante 2.0",
        price: 1200,
        img: "../images/MateAutocebante.jpeg",
        desc: "Mate con sistema de cebado automatico.",
        stock: 10,
        category: "Mate"
    },
    {
        id: 3,
        name: "Taza de ceramica sublimada Dia del Padre",
        price: 800,
        img: "../images/Taza.jpg",
        desc: "Taza de ceramica sublimada con capacidad de 400ml",
        stock: 10,
        category: "Tazas"
    },
    {
        id: 4,
        name: "Set Matero Trama",
        price: 3000,
        img: "../images/SetMatero.jpeg",
        desc: "Incluye termo de acero de un litro, yerbera, azucarera, ambas con tapa y pico vertedor.",
        stock: 10,
        category: "Mate"
    },   
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (productStock)
        }, 2000)
    })
}
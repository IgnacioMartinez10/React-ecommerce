import Item from "../Item/Item"


function ItemList ({products}) {
    return (
        products.map(products => (
            <Item

            key = {products.id}
            name ={ products.name}
            desc = {products.desc}
            img = {products.img}
            price = {products.price}
            stock = {products.stock}
            />
        )
    ))
}

export default ItemList
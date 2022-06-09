const productStock = [

    {
        id: '1',
        name: "Vaso Coffe ST",
        price: '$900',
        img: "../images/VasoCoffe.jpg",
        desc: "Vaso de plastico doble capa con banda de silicona",
        stock: 10,
        category: 'Coffee'
    },
    {
        id: '2',
        name: "Vaso con banda de silicona",
        price: '$600',
        img: "../images/VasoSilicona.jpg",
        desc: "Vaso de plastico semi-rigido con banda de silicona",
        stock: 10,
        category: 'Coffee'
    },
    {
        id: '3',
        name: "Vaso Coffee Express",
        price: '$500',
        img: "../images/VasoExpress.jpg",
        desc: "Vaso coffee de plástico con orificio en la tapa para beber Estampado con frases en serigrafía. No apto para microondas",
        stock: 10,
        category: 'Coffee'
    },
    
    {
        id: '4',
        name: "Mate autocebante 2.0",
        price: '$1400',
        img: "../images/MateAutocebante.jpeg",
        desc: "Apretá, cebá y tomá. Sistema de cebado automático. Capacidad 500cc. Incluye bombilla",
        stock: 10,
        category: 'Mate'
    },
    {
        id: '5',
        name: "Set Matero Madera",
        price: '$3000',
        img: "../images/SetMateroMadera.jpg",
        desc: "Incluye termo de acero de un litro, bolso, yerbera, azucarera, ambas con tapa y pico vertedor.",
        stock: 7,
        category: 'Mate'
    },   
    {
        id: '6',
        name: "Set Matero Limate",
        price: '$2600',
        img: "../images/SetMateroLimate.jpeg",
        desc: "Incluye termo de acero de un litro, yerbera, azucarera, ambas con tapa y pico vertedor. SIN BOLSO",
        stock: 7,
        category: 'Mate'
    },   
    {
        id: '7',
        name: "Botella con mosquetón",
        price: '$900',
        img: "../images/BotellaMosqueton.jpg",
        desc: "Capacidad 450cc",
        stock: 7,
        category: 'Botellas'
    },   
    {
        id: '8',
        name: "Botella deportiva eco",
        price: '$900',
        img: "../images/BotellaEco.jpg",
        desc: "Botella plastica con tapa a rosca, forrada con vinilo laminado mate en variados diseños. Capacidad 700cc",
        stock: 7,
        category: 'Botellas'
    },   
    {
        id: '9',
        name: "Botella de vidrio",
        price: '$400',
        img: "../images/BotellaVidrio.jpg",
        desc: "Botella de vidrio Capacidad 1000cc",
        stock: 7,
        category: 'Botellas'
    },   
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (productStock)
        }, 500)
    })
};


export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productStock.find(prod => prod.id === id))
        }, 500)
    })
};

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productStock.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

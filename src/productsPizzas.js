const products =  [
    { 
        id: '1', 
        name: 'Especial de la casa ', 
        price: 1200, 
        category: 'especial', 
        img:'/images/img_card/1.jpg', 
        // img: '/images/nombredeimagen.jpg', 
        description:'Muzzarella con ALbaca'
    },
    { id: '2', name: 'Especial Rosendo', price: 2000, category: 'especial', img:'/images/img_card/2.jpg', description:'muy canchera'},
    { id: '3', name: 'Especil del dia', price: 1500, category: 'especial', img:'/images/img_card/3.jpg', stock: 10, description:'bien clasica pero especial'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
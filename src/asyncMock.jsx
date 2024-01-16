const equipos = [
    {id: 1, name: 'iPhone 15 Pro Max', category: 'iPhone', price: 1480, stock: 10, description:'iPhone 15 Pro Max, 6.69 pulgadas, 512GB, color Natural', img: 'https://http2.mlstatic.com/D_NQ_NP_863222-MLA71783367612_092023-O.webp'},
    {id: 2, name: 'MacBook Pro M2', category: 'MacBook', price: 2750, stock: 4, description:'MacBook Pro, procesador M2, 16 pulgadas, 512GB, color Silver', img: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.news_app_ed.jpg'},
    {id: 3, name: 'iPad Air', category: 'iPad', price: 1099, stock: 5, description:'iPad Air 2022, 5ta generación, 256GB, color Blue', img: 'https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2022/06/iPad_Air_Wi-Fi_Blue_PDP_Image_Position-2_MXLA.jpg'}
];

export const getEquipos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(equipos);
        }, 1000);
    });
}

export const getEquiposById = (equiposId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(equipos.find((t) => t.id === Number(equiposId)));
        }, 700);
    });
}

export const getEquiposByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(equipos.filter((c) => c.category === categoryId));
        }, 200);
    });
}

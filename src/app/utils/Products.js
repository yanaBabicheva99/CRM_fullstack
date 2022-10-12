export const getData = () => {
    const dateNow = new Date();
    let day = dateNow.getDay();
    let month = dateNow.getMonth() + 1;
    const year = dateNow.getFullYear();
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    return day + '.' + month + '.' + year;
};
export const getPrice = (price) => {
    const newPrice = String(price);
    return '$' + newPrice[0] + ' ' + newPrice.slice(1);
};
export const getWeight = (weight) => {
    return weight + 'kg'
};
const products = [
    {
        id: 1,
        productName: 'Sneakers',
        store: 'Adidas',
        address: '15 Krylatskaya',
        category: 'Sportswear',
        creationData: '',
        price: '1000',
        remains: '40',
        weight: '5',
        actions: 'component'
    },
    {
        id: 2,
        productName: 'Sneakers',
        store: 'Nike',
        address: '15 Krylatskaya',
        category: 'Sportswear',
        creationData: '',
        price: '1000',
        remains: '40',
        weight: '5',
        actions: 'component'
    },
    {
        id: 3,
        productName: 'Sneakers',
        store: 'Puma',
        address: '15 Krylatskaya',
        category: 'Sportswear',
        creationData: '',
        price: '1000',
        remains: '40',
        weight: '5',
        actions: 'component'
    },
]
export const getProducts = () => {
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify(products))
    }
    return JSON.parse(localStorage.getItem('products'));
}
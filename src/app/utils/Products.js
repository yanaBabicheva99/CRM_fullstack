export const getData = () => {
    const dateNow = new Date();
    let day = dateNow.getDate();
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
const products = [];
export const getProducts = () => {
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify(products))
    }
    return JSON.parse(localStorage.getItem('products'));
}
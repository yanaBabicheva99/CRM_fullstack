
const sellProducts = [];
export const getSellProduct = () => {
    if (!localStorage.getItem('sellProducts')) {
        localStorage.setItem('sellProducts', JSON.stringify(sellProducts))
    }
    return JSON.parse(localStorage.getItem('sellProducts'));
}
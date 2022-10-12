import React, {useContext, useEffect, useState} from 'react'
import {getProducts} from "../utils/Products";

const ProductsContext = React.createContext();


export const useProducts = () => {
    return useContext(ProductsContext)
}

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       const arrProducts = getProducts();
       setProducts(arrProducts);
       setLoading(false)
    }, []);

    const deleteProduct = (id) => {
        const products = JSON.parse(localStorage.getItem('products'));
        const updateProducts = products.filter(product => product.id !== id);
        localStorage.setItem('products', JSON.stringify(updateProducts));
        setProducts(updateProducts);
    }

    const addProduct = (data) => {
        console.log(data);

    }

    return <ProductsContext.Provider value={{products, loading, deleteProduct}}>
        {children}
    </ProductsContext.Provider>
}
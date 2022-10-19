import React, {useContext, useEffect, useState} from 'react'
import {getData, getProductsStorage} from "../utils/Products";

const ProductsContext = React.createContext();


export const useProducts = () => {
    return useContext(ProductsContext);
}

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       const arrProducts = getProductsStorage();
       setProducts(arrProducts);
       setLoading(false)
    }, []);

    const deleteProduct = (id) => {
        const updatedProducts = products.map(product => {
            if (product.id === id) {
                return {
                    ...product,
                    delete: true
                }
            }
            return product
        });

        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
    }

    const getProducts = () => {
        return products.filter(product => product.remains !== 0 && !product.delete);
    }

    const getSoldProducts = () => {
        return products.filter(product => product.quantity !== '');
    }

    const addProduct = (data) => {
        const updatedProducts = [...products,  {
            id: Date.now(),
            ...data,
            // address: '15 Krylatskaya',
            creationData: getData(),
            day: '',
            lastSale: '',
            quantity: ''
        }];

        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
    }

    const changeProduct = (data) => {
        console.log('change', data);
        const oldProduct = products.find(product => product.id === data.id);

        const updatedProducts = products.map(product => {
            if (product.id === data.id) {
                return {
                    ...oldProduct,
                    ...data
                };
            }
            return product;
        });

        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
    }

    const updateProduct = (id, newQuantity, day) => {
        const product = products.find(product => product.id === id);
        const oldQuantity = Number(product.quantity);

        const updatedProduct = {
            ...product,
            remains: product.remains - newQuantity || 0,
            quantity: oldQuantity + newQuantity,
            day,
            lastSale: getData()
        };

         const updatedProducts = products.map(product => {
             if (product.id === id) {
                 return updatedProduct;
             }
             return product;
         });

        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
    }

    return <ProductsContext.Provider value={
        {
            products,
            loading,
            getProducts,
            getSoldProducts,
            addProduct,
            changeProduct,
            updateProduct,
            deleteProduct
        }
    }>
        {children}
    </ProductsContext.Provider>
}
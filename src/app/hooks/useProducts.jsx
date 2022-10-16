import React, {useContext, useEffect, useState} from 'react'
import {getData, getProducts} from "../utils/Products";

const ProductsContext = React.createContext();


export const useProducts = () => {
    return useContext(ProductsContext);
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
        const updatedProducts = products.filter(product => product.id !== id);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
    }

    const addProduct = (data) => {
        const updatedProducts = [...products,  {
            id: Date.now(),
            ...data,
            address: '15 Krylatskaya',
            creationData: getData(),
        }];

        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
    }

    const changeProduct = (data) => {
        console.log('change', data);

        const updatedProducts = products.map(product => {
            if (product.id === data.id) {
                return data;
            }
            return product;
        });

        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);

        return data;
    }

    const updateProduct = (id, quantity) => {
        const product = products.find(product => product.id === id);

        const updatedProduct = {
            ...product,
            remains: product.remains - quantity
        };

        if (updatedProduct.remains === 0) {
            deleteProduct(updatedProduct.id);
            return product;
        }

         const updatedProducts = products.map(product => {
             if (product.id === id) {
                 return updatedProduct;
             }
             return product;
         });

        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
        return product;
    }

    return <ProductsContext.Provider value={
        {   products,
            loading,
            deleteProduct,
            addProduct,
            changeProduct,
            updateProduct
        }
    }>
        {children}
    </ProductsContext.Provider>
}
import React, {useContext, useEffect, useState} from 'react'
import {getData, getProducts} from "../utils/Products";

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
        const updateProducts = products.filter(product => product.id !== id);
        localStorage.setItem('products', JSON.stringify(updateProducts));
        setProducts(updateProducts);
    }

    const addProduct = (data) => {
        const updateProducts = [...products,  {
            id: Date.now(),
            ...data,
            address: '15 Krylatskaya',
            creationData: getData(),
        }];
        localStorage.setItem('products', JSON.stringify(updateProducts));
        setProducts(updateProducts);
    }

    const changeProduct = (data) => {
          const updateProducts = products.map(product => {
              if (product.id === data.id) {
                  return {
                      ...data,
                      address: '15 Krylatskaya',
                      creationData: product.creationData,
                  };
              }
              return product;
          });
        localStorage.setItem('products', JSON.stringify(updateProducts));
        setProducts(updateProducts);
    }

    return <ProductsContext.Provider value={
        {   products,
            loading,
            deleteProduct,
            addProduct,
            changeProduct
        }
    }>
        {children}
    </ProductsContext.Provider>
}
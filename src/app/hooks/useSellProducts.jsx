import React, {useContext, useState, useEffect} from "react";
import {getSellProduct} from "../utils/SellProducts";
import {getData} from "../utils/Products";

const SellContext = React.createContext();


export const useSellProducts = () => {
    return useContext(SellContext);
}

export const SellProvider = ({children}) => {
    const [sellProducts, setSellProducts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const arrSellProducts = getSellProduct();
        setSellProducts(arrSellProducts);
        setLoading(false)
    }, []);

    const addSellProduct = (data,  quantity, day) => {
        const {remains, ...sellData} = data;
        const sellProduct = sellProducts.find(product => product.id === sellData.id);

        if (sellProduct !== undefined) {
           return updateSellProduct(sellProduct, quantity);
        }
        const updateSellProducts = [...sellProducts,
            {
                ...sellData,
                quantity,
                day,
                lastSale: getData()
            }
        ];
        localStorage.setItem('sellProducts', JSON.stringify(updateSellProducts));
        setSellProducts(updateSellProducts);
    }

    const updateSellProduct = (sellProduct, items) => {

        const updateSellProduct = {
            ...sellProduct,
            quantity: sellProduct.quantity + items
        };
        const updateSellProducts = sellProducts.map(product => {
            if (product.id === sellProduct.id) {
                return updateSellProduct;
            }
            return product;
        });
        localStorage.setItem('sellProducts', JSON.stringify(updateSellProducts));
        setSellProducts(updateSellProducts);
    }

    return <SellContext.Provider value={
        {
            sellProducts,
            loading,
            addSellProduct
        }
    }>
        {children}
    </SellContext.Provider>

}
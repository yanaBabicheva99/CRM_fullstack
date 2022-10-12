import React from 'react';
import ProductsTable from "../../table/productsTable/ProductsTable";
import {useProducts} from "../../../hooks/useProducts";


const Products = () => {
    const {products, loading, deleteProduct} = useProducts();

    const handleDelete = (id) => {
        deleteProduct(id);
    };

    console.log(products);
    return (
        <>
            {!loading ?
                <ProductsTable products={products} handleDelete={handleDelete} />
                : <h2>Loading...</h2>}
        </>
    );
};

export default Products;
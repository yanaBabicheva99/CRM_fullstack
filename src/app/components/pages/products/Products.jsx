import React, {useEffect, useState} from 'react';
import ProductsTable from "../../table/productsTable/ProductsTable";
import {useProducts} from "../../../hooks/useProducts";
import Modal from "../../modal/Modal";
import {useModal} from "../../../hooks/useModal";
import ProductFormEdit from "../../form/productForm/ProductFormEdit";


const Products = () => {
    const [currentProduct, setCurrentProduct] = useState(null);
    const {products, loading, deleteProduct} = useProducts();
    const {visible: edit, handleVisible: handleVisibleEdit} = useModal();

    const handleDelete = (id) => {
        deleteProduct(id);
    };

    const handleCurrentProduct = (data) => {
        setCurrentProduct(data);
    };

    if (loading) {
        return <h2>Loading...</h2>
    } else {
       return (
           <>
               <ProductsTable
                   products={products}
                   handleDelete={handleDelete}
                   onCurrentProduct={handleCurrentProduct}
                   onVisibleEdit={handleVisibleEdit}
               />
               <Modal
                   visible={edit}
                   handleVisible={handleVisibleEdit}
               >
                   {currentProduct && (
                       <ProductFormEdit
                           data={currentProduct}
                           handleVisible={handleVisibleEdit}
                       />)
                   }
               </Modal>
           </>
       )
    }
};

export default Products;

import React, {useEffect, useState} from 'react';
import ProductsTable from "../../table/productsTable/ProductsTable";
import {useProducts} from "../../../hooks/useProducts";
import Modal from "../../modal/Modal";
import ProductFormEdit from "../../form/productForm/ProductFormEdit";
import {useModal} from "../../../hooks/useModal";


const Products = () => {
    const [currentProduct, setCurrentProduct] = useState(null);
    const {products, loading, deleteProduct} = useProducts();
    const {visible, setVisible} = useModal();

    const handleOpen = () => {
        setVisible({edit: true});
    };
    const handleClose = () => {
        setVisible({edit: false})
    };

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
                   onVisibleEdit={handleOpen}
               />
               <Modal
                   visible={visible.edit}
                   handleVisible={handleClose}
               >
                   {currentProduct && (
                       <ProductFormEdit
                           data={currentProduct}
                           handleVisible={handleClose}
                       />)
                   }
               </Modal>
           </>
       )
    }
};

export default Products;

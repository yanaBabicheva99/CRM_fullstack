import React, {useEffect, useState} from 'react';
import ProductsTable from "../../table/productsTable/ProductsTable";
import {useProducts} from "../../../hooks/useProducts";
import Modal from "../../modal/Modal";
import ProductFormEdit from "../../form/productForm/ProductFormEdit";
import {useModalContextAction} from "../../../hooks/useModalContextAction";


const Products = () => {
    const [currentProduct, setCurrentProduct] = useState(null);
    const {products, loading, deleteProduct} = useProducts();
    const [open, setOpen] = useModalContextAction();

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
                   onVisibleEdit={() => setOpen({open: true})}
               />
               <Modal
                   visible={open.open}
                   handleVisible={() => setOpen({open: false})}
               >
                   {currentProduct && (
                       <ProductFormEdit
                           data={currentProduct}
                           handleVisible={() => setOpen({open: false})}
                       />)
                   }
               </Modal>
           </>
       )
    }
};

export default Products;

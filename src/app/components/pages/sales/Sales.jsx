import React from 'react';
import SalesTable from "../../table/salesTable/SalesTable";
import {useSales} from "../../../hooks/useSales";
import style from "../../../style/title/Title.module.scss";

const Sales = () => {
    const {soldProducts} = useSales();
    return (
      <>
          {soldProducts.length === 0
              ? <div className={style.title__wrapper}>
                  <h2 className={style.title}>Sales not found</h2>
              </div>
              : <SalesTable
                  sellProducts={soldProducts}
              />
          }
      </>
    );
};

export default Sales;
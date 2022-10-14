import React from 'react';
import SalesTable from "../../table/salesTable/SalesTable";
import {useSellProducts} from "../../../hooks/useSellProducts";

const Sales = () => {
    const {sellProducts} = useSellProducts();
    return (
      <>
          <SalesTable
              sellProducts={sellProducts}
          />
      </>
    );
};

export default Sales;
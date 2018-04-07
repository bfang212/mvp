import React from 'react';
import ReactCollapsingTable from 'react-collapsing-table';


const StockTable = ({ rows, columns }) => (
  <div>
  <h2>There are { rows.length } stocks in the portfolio.</h2>
  <ReactCollapsingTable 
  rows={ rows } 
  columns={ columns } 
  rowSize={ 15 }
  showPagination={true}
  showSearch={true}
/>
  </div>
);


export default StockTable;
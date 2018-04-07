import React from 'react';
import ReactCollapsingTable from 'react-collapsing-table';
import ArrowUp from 'react-icons/lib/fa/arrow-up';
import ArrowDown from 'react-icons/lib/fa/arrow-down';
import PopUpAlert from './PopUpAlert.jsx';


// var icons = {
//   ascending: <svg width="10" height="10"><circle cx="5" cy="5" r="4" stroke="blue" strokeWidth="1" fill="red" /></svg>,
//   descending: <svg width="10" height="10"><circle cx="5" cy="5" r="4" stroke="red" strokeWidth="1" fill="blue" /></svg>,
//   openRow: ArrowDown,
//   closeRow: ArrowUp
// }

const StockTable = ({ rows, columns, customIconProps }) => (
  <div>
  <h2>There are { rows.length } stocks in the portfolio.</h2>
  <ReactCollapsingTable 
  rows={ rows } 
  columns={ columns } 
  rowSize={ 15 }
  showPagination={true}
  showSearch={true}
  // icons={icons}
/>
  </div>
);


export default StockTable;
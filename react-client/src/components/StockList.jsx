import React from 'react';
import Stock from './Stock.jsx';

const table = {
  width: '150%'
};



const StockList = ({stocks}) => (
  <div>
    <h4>There are { stocks.length } stocks in the portfolio.</h4>
    <br/><br/>
    <table style={table}>
      <tbody>
        <tr>
          <th>Ticker</th>
          <th>Latest Price</th>
          <th>52-Week Low</th>
          <th>% Change</th>
        </tr>
        { stocks.map((stock, index) => <Stock key={index} stock={stock}/>)}
      </tbody>
    </table>
  </div>
)



export default StockList;
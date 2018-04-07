import React from 'react';

const cell = {
  textAlign: 'center'
};


const Stock = ({stock}) => (
  <tr>
    <td style={cell}>{stock.symbol}</td>
    <td style={cell}>{stock.lastprice}</td>
    <td style={cell}>{stock.week52low}</td>
    <td style={cell}>{stock.percentage_difference}</td>
    <td style={cell}>{stock.updatedAt}</td>
  </tr>
)

export default Stock;
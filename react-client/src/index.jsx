import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StockList from './components/StockList.jsx';
import AddStock from './components/AddStock.jsx';
import StockTable from './components/StockTable.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      stocks: []
    }
  
  this.search = this.search.bind(this);
  }

  componentDidMount() {
    axios.get('/stocks')
    .then((stocks) => {
      this.setState({stocks: stocks.data})
    })
    .catch((err) => console.error(err))
  }


  search (ticker) {
    axios.post('/stocks', {ticker})
    .then(() => axios.get('/stocks'))
    .then((stocks) => {
      this.setState({stocks: stocks.data})
    })
    .catch((err) => console.error(err))
  }



  render () {
    var rows = this.state.stocks.map((stock, index) => {
      return {id: index, 
        symbol: stock.symbol, 
        latestPrice: stock.lastprice, 
        week52Low: stock.week52low,
        percentageChange: stock.percentage_difference
      }
    })
    var columns = [
      { accessor: 'symbol', label: 'Ticker', priorityLevel: 1, position: 1, minWidth: 150, },
      { accessor: 'latestPrice', label: 'Latest Price', priorityLevel: 2, position: 2, minWidth: 150, },
      { accessor: 'week52Low', label: '52-Week Low', priorityLevel: 3, position: 3, minWidth: 150, },
      { accessor: 'percentageChange', label: '% Change', priorityLevel: 4, position: 4, minWidth: 150, }
    ]

    return (<div>
      <h1>Let's time the market!</h1>
      <AddStock onSearch={this.search}/>
      {/* <StockList stocks={this.state.stocks}/> */}
      <StockTable rows={rows} columns={columns}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
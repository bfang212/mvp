import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StockList from './components/StockList.jsx';
import AddStock from './components/AddStock.jsx';
import StockTable from './components/StockTable.jsx';
import ArrowUp from 'react-icons/lib/fa/arrow-up';
import ArrowDown from 'react-icons/lib/fa/arrow-down';

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
      console.log('swtocks: ', stocks);
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
        percentageChange: stock.percentage_difference,
        headline1: stock.headline1,
        headline2: stock.headline2,
        headline3: stock.headline3
      }
    })
    var columns = [
      { accessor: 'symbol', label: 'Ticker', priorityLevel: 1, position: 1, minWidth: 300, },
      { accessor: 'latestPrice', label: 'Latest Price', priorityLevel: 2, position: 2, minWidth: 300, },
      { accessor: 'week52Low', label: '52-Week Low', priorityLevel: 3, position: 3, minWidth: 300, },
      { accessor: 'percentageChange', label: '% Change', priorityLevel: 4, position: 4, minWidth: 300, },
      { accessor: 'headline1', label: 'Headline 1', priorityLevel: 5, position: 5, minWidth: 300, },
      { accessor: 'headline2', label: 'Headline 2', priorityLevel: 6, position: 6, minWidth: 300, },
      { accessor: 'headline3', label: 'Headline 3', priorityLevel: 7, position: 7, minWidth: 300, },
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
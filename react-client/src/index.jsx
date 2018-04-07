import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StockList from './components/StockList.jsx';
import AddStock from './components/AddStock.jsx';

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
    return (<div>
      <h1>Let's time the market!</h1>
      <AddStock onSearch={this.search}/>
      <StockList stocks={this.state.stocks}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
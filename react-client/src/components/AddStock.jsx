import React from 'react';

class AddStock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      ticker: ''
    }
    this.onChange = this.onChange.bind(this);
    this.addStock = this.addStock.bind(this);
  }

  addStock () {
    this.props.onSearch(this.state.ticker);
    this.setState({ticker: ''});
  }

  onChange(e) {
    this.setState({
      ticker: e.target.value
    })
  }


  render() {
    return (<div>
      <h3>Add more tickers!</h3>
      Enter a stock ticker: <input value={this.state.ticker} onChange={this.onChange}/>
      <button onClick={this.addStock}>Add ticker</button>
    </div>)
  }
}


export default AddStock;
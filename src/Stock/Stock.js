import React from 'react';
import { insertStock } from '../sherlock-api';

class Stock extends React.Component {
  state = {
    stockId: '',
    ticker: '',
    startingAmount: '',
    startDate: '',
    endDate: '',
    feePercent: '',
    buyAmount: '',
    sellAmount: ''
  }

  handleNewStock = async(e) => {
    e.preventDefault();

    await insertStock({
        stockId: this.state.stockId,
        ticker: this.state.ticker,
        startingAmount: this.state.startingAmount,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        feePercent: this.state.feePercent,
        buyAmount: this.state.buyAmount,
        sellAmount: this.state.sellAmount
    })
    this.props.history.push('/portfolio')
  }
  render() { 
    return (
      <div>
        <h1>New Stock</h1>
        <form>
          <label>
            <h3>Ticker Symbol</h3>
            <input onChange={e => this.setState({ ticker: e.target.value })} value={this.state.ticker} />
          </label>
          <label>
            <h3>Starting Amount</h3>
            <input onChange={e => this.setState({ startingAmount: e.target.value })} value={this.state.startingAmount} />
          </label>
          <label>
            <h3>Start Date</h3>
            <input onChange={e => this.setState({ startDate: e.target.value })} value={this.state.startDate} />
          </label>
          <label>
            <h3>End Date</h3>
            <input onChange={e => this.setState({ endDate: e.target.value })} value={this.state.endDate} />
          </label>
          <label>
            <h3>Fee Percent</h3>
            <input onChange={e => this.setState({ feePercent: e.target.value })} value={this.state.feePercent} />
          </label>
          <label>
            <h3>Buy Amount</h3>
            <input onChange={e => this.setState({ buyAmount: e.target.value })} value={this.state.buyAmount} />
          </label>
          <label>
            <h3>Sell Amount</h3>
            <input onChange={e => this.setState({ sellAmount: e.target.value })} value={this.state.sellAmount} />
          </label>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
 
export default Stock;
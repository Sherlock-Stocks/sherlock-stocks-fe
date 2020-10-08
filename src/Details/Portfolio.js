import React from 'react';
import { getPortfolio } from '../sherlock-api.js';

class Portfolio extends React.Component {
  state = {
    portfolio: []
  }

  componentDidMount = async () => {
    const portfolio = await getPortfolio();
    console.log(portfolio);

    this.setState({
      portfolio: portfolio.body
    })
  }

  render() {
    return (
      <div>
        <h2>Portfolio</h2>
        <div>
          <button></button>
        </div>
        <ul>
          {
            this.state.portfolio.map((stock) => {
              return <li>
                <h4>Ticker</h4>
                <p>{stock.ticker}</p>
                <h4>Starting Amount</h4>
                <p>{stock.startingAmount}</p>
                <h4>Start Date</h4>
                <p>{stock.startDate}</p>
                <h4>End Date</h4>
                <p>{stock.endDate}</p>
                <h4>Fee Percent</h4>
                <p>{stock.feePercent}</p>
                <h4>Buy Amount</h4>
                <p>{stock.buyAmount}</p>
                <h4>Result</h4>
                <p>{stock.result}</p>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Portfolio;
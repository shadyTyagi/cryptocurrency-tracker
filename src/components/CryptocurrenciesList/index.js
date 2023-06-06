// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoCurrencyData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoCurrencyData: formattedData, isLoading: false})
  }

  render() {
    const {cryptoCurrencyData, isLoading} = this.state
    return (
      <div className="main-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="list-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              className="cryptocurrency-img"
              alt="cryptocurrency"
            />
            <ul className="currencies-list">
              <div className="currency-list-container">
                <div className="img-name-container">
                  <h1 className="currency-title">Coin Type</h1>
                </div>
                <div className="money-container">
                  <h1 className="usd-currency">USD</h1>
                  <h1 className="euro-currency">EURO</h1>
                </div>
              </div>
              {cryptoCurrencyData.map(eachItem => (
                <CryptocurrencyItem
                  key={eachItem.id}
                  cryptoCurrencyData={eachItem}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList

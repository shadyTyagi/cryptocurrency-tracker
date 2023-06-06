// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyData} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    id,
    currencyLogo,
  } = cryptoCurrencyData
  return (
    <li className="list-container">
      <div className="item-list-container">
        <div className="img-name-container">
          <img className="currency-img" src={currencyLogo} alt={currencyName} />
          <h2 className="currency-title">{currencyName}</h2>
        </div>
        <div className="money-container">
          <h1 className="usd-currency">{usdValue}</h1>
          <h1 className="euro-currency">{euroValue}</h1>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

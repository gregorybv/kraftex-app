import React from 'react';
import './coin.css'
import coin from "../../assets/img/coin/coin.svg"

const Coin = () => {
  return (
    <section className="coin container">
      <div className="coin__block">
        <p className="coin__text">Обмен валют</p>
        <img className="coin__image" src={coin} alt="coin"/>
        <p className="coin__subtext">Kraftex предлагает услуги
          онлайн- и оффлайн-обмена валют
          <span className="coin__subtext__span">(RUB, USD, EUR, USDT, BTC, ETH и др. криптовалют) </span>
          в различных направлениях. Документов при осуществлении
          сделок по обмену не потребуются. Kraftex гарантирует
          безопасность, конфиденциальность и полное соблюдение
          коммерческой тайны.
        </p>
      </div>
    </section>
  )
}

export default Coin




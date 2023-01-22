import React from 'react';
import './swap.css'

const Swap = () => {
  return (
    <section className="swap container">
      <div className="swap__block">
        <nav className="swap__header">
          <ul className="swap__column">
            <li className="swap__title">Обмен валюты / криптовалюты - это операция
              по наличному или безналичному обмену валют и криптовалют в соответствии
              с установленным курсом, производящаяся онлайн или в специализированном
              пункте подразделения компании Kraftex.
            </li>
          </ul>
          <ul className="swap__column">
            <li className="swap__text"><span className="swap__text_span">Для кого эта услуга? </span> Для клиентов, которые:</li>
            <li className="swap__subtext">переводят денежные средства за границу;</li>
            <li className="swap__subtext">получают расчет в иностранной валюте или криптовалюте;</li>
            <li className="swap__subtext">ведут инвестиционную деятельность;</li>
            <li className="swap__subtext">занимаются арбитражной торговлей;</li>
            <li className="swap__subtext">занимаются биржевой торговлей.</li>
          </ul>
        </nav>
        <button className="swap__button">Заказать обмен валют</button>
        <p className="swap__footer">Более подробную информацию по услуге обмена валют,
          а также актуальный курс обмена Вы можете получить у Вашего персонального менеджера.
        </p>
      </div>
    </section>
  )
}

export default Swap




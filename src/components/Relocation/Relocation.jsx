import React from 'react';
import './relocation.css'

const Relocation = () => {
  return (
    <section className="relocation container">
      <div className="relocation__block">
        <nav className="relocation__header">
          <ul className="relocation__column">
            <li className="relocation__info"><span className="relocation__info_span">Международные финансовые перестановки</span> -
              трансграничное перемещение (в том числе инкассация) наличной денежной
              массы из одной страны в другую. Другими словами, это одномоментная
              передача клиентом активов в одном месте и получение своих средств в
              любом другом.
            </li>
          </ul>
          <ul className="relocation__column">
            <li className="relocation__text"><span className="relocation__text_span">Для кого эта услуга? </span> Для клиентов, желающих:</li>
            <li className="relocation__subtext">провести сделку по купле-продажи недвижимости или транспортных средств
              за границей;
            </li>
            <li className="relocation__subtext">приобрести оптом товары для бизнеса за рубежом;</li>
            <li className="relocation__subtext">передать деньги партнерам или родственникам в другой стране;</li>
            <li className="relocation__subtext">сберечь свой капитал или имущество от волатильности;</li>
            <li className="relocation__subtext">создать финансовую подушку.</li>
          </ul>
        </nav>
        <button className="relocation__button">Заказать перестановку</button>
        <p className="relocation__footer">Комиссии за оказание услуг по перестановке обсуждаются индивидуально и зависят
          от:
          направления, валюты и суммы перестановки.
          Более подробную информацию по услуге перестановки Вы можете получить у Вашего персонального менеджера.</p>
      </div>
    </section>
  )
}

export default Relocation




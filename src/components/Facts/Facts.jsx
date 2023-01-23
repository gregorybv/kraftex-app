import React from 'react';
import './facts.css'
import one from '../../assets/img/facts/technology.svg'
import two from '../../assets/img/facts/bitcoin.svg'
import three from '../../assets/img/facts/global.svg'
import four from '../../assets/img/facts/consultant.svg'
import five from '../../assets/img/facts/team.svg'
import six from '../../assets/img/facts/teamwork.svg'

const Facts = () => {
  return (
    <section className="facts container">
      <div className="facts__block">
        <p className="facts__title">Факты и цифры</p>
        <nav className="facts__content">
          <ul className="facts__rows">
            <ul className="facts__row">
              <li className="facts__text">Опыт управления финансами</li>
              <li className="facts__subtext"> 15 лет</li>
              <img className="facts__image" src={one} alt="one"/>
            </ul>
            <ul className="facts__row">
              <li className="facts__text">На рынке криптовалют</li>
              <li className="facts__subtext">с 2013 года</li>
              <img className="facts__image" src={two} alt="two"/>
            </ul>
            <ul className="facts__row">
              <li className="facts__text">Kraftex присутствует</li>
              <li className="facts__subtext">в 15 странах</li>
              <img className="facts__image" src={three} alt="three"/>
            </ul>
          </ul>
          <ul className="facts__rows">
            <ul className="facts__row">
              <li className="facts__text">Средний стаж работы сотрудников</li>
              <li className="facts__subtext">~ 5 лет</li>
              <img className="facts__image" src={four} alt="four"/>
            </ul>
            <ul className="facts__row">
              <li className="facts__text">Численность команды</li>
              <li className="facts__subtext">50 человек</li>
              <img className="facts__image" src={five} alt="five"/>
            </ul>
            <ul className="facts__row">
              <li className="facts__text">Клиентов по всему миру</li>
              <li className="facts__subtext"> 500</li>
              <img className="facts__image" src={six} alt="six"/>
            </ul>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Facts




import React from 'react';
import './modal.css'
import logo from '../../../assets/img/logo.png'
import x from '../../../assets/img/dropdown/X.png'
import telegram from '../../../assets/img/dropdown/telegram.svg'
import instagram from '../../../assets/img/dropdown/instagram.svg'
import facebook from '../../../assets/img/dropdown/facebook.svg'

const Modal = ({active, setActive}) => {
  return (
    <div className={active ? "modal active" : "modal"} >
      <div className="modal__block" onClick={e => e.stopPropagation}>
        <div className="modal__header">
          <img src={logo} alt="logo"/>
          <button className='modal__button'  onClick={() => setActive(false)}>
            <img src={x} alt="x"/>
          </button>
        </div>
        <p className="modal__menu">МЕНЮ</p>
        <nav className="modal__content">
          <ul className="modal__column">
            <li className="modal__title">О Сервисе</li>
            <li className="modal__title">Наш подход</li>
            <li className="modal__title">Наша команда</li>
          </ul>
          <ul className="modal__column">
            <li className="modal__title">Наши услуги</li>
            <li className="modal__title">Финансовые перестановки</li>
            <li className="modal__title">Обмен валют</li>
          </ul>
          <ul className="modal__column">
            <li className="modal__title">Привилегии</li>
            <li className="modal__title">IT-продукты Kraftex</li>
            <li className="modal__title">Стать клиентом Kraftex</li>
          </ul>
        </nav>
        <div className="modal__footer">
          <div className="modal__row">
            <h3 className="modal__text">Адрес</h3>
            <p className="modal__subtext">Москва, ММДЦ «Москва-Сити»,
              Пресненская набережная, д. 12 (Башня Федерация)</p>
          </div>
          <div className="modal__row">
            <h3 className="modal__text">Контакты</h3>
            <p className="modal__subtext">e-mail: mail@mail.ru</p>
            <p className="modal__subtext"> +7 999 999-99-99</p>
          </div>
          <div className="modal__network">
            <a href="#" ><img src={telegram} alt="telegram"/></a>
            <a href="#" ><img src={instagram} alt="instagram"/></a>
            <a href="#" ><img src={facebook} alt="facebook"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal




import React from 'react';
import './clients.css'
import safe from '../../assets/img/clients/safe.png'
import ClientsForm from "../UI/ClientsForm/ClientsForm.jsx";
import chit from "../../assets/img/clients/chit.svg";

const Clients = () => {
  return (
    <section className="clients container">
      <div className="clients__clock">
        <p className="clients__header">Стать клиентом Kraftex</p>
        <div className="clients__content">
          <img className='clients__image' src={safe} alt="safe"/>
          <div className="clients__right">
            <ClientsForm/>
            <div className="clients__warning">
              <img src={chit} alt="chit"/>
              <p className="clients__text">Используем шифрование
                для гарантии безопасности Ваших персональных данных
              </p>
            </div>
            <p className="clients__subtext">Нажимая кнопку “Отправить”,
              я подтверждаю согласие на обработку моих персональных данных
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients




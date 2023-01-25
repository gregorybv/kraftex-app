import React from 'react';
import './finance.css'
import finance from "../../assets/img/finance/map.png"

const Finance = () => {
  return (
   <section className="finance container">
     <div className="finance__block">
       <p className="finance__title">Финансовые перестановки</p>
       <p className="finance__text">Kraftex предлагает услуги перестановки
         активов <span className="finance__span">(Crypto, RUB, USD, EUR, AED, CNY)</span> в обе стороны между странами:
         <span className="finance__span"> Россия, ОАЭ, Турция, Китай, страны Евросоюза и США.</span> Также имеются опции
         инкассации активов и заморозки полученного резерва на несколько дней в случае,
         если клиент желает забрать денежные средства в другой стране лично.</p>
       <img className="finance__image" src={finance} alt="finance"/>
     </div>
   </section>
  )
}

export default Finance




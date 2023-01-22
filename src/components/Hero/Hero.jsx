import React from 'react';
import './hero.css'
import card from '../../assets/img/hero/card.png'

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__block">
        <img className="hero__card" src={card} alt="card"/>
        <div className="hero__content">
          <p className="hero__text">Kraftex — Ваш надежный партнёр в сфере управления капиталом.</p>
          <p className="hero__subtext">Мы предлагаем эксклюзивные услуги и индивидуальное обслуживание
            для <span className="hero__span"> особых клиентов</span>, а также современные и
            <span className="hero__span"> надежные финансовые</span> решения для частных партнеров
            и бизнеса в области электронных, цифровых, наличных и
            <span className="hero__span">безналичных платежей</span> в России и за ее
            пределами в рамках внешнеэкономической деятельности.</p>
          <p className="hero__subtext">Множество состоятельных клиентов, предпринимателей и трейдеров
            используют решения компании Kraftex для безопасного проведения финансовых операций: от
            обмена валют и открытия банковского счета до выполнения трансграничных переводов и
            заключения крупных сделок.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero




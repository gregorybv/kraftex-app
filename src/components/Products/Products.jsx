import React from 'react';
import './products.css'
import cash from '../../assets/img/products/cash.png'
import kraft from '../../assets/img/products/bot.svg'

const Products = () => {
  return (
   <section className="products">
     <div className="products__block">
       <h2 className="products__title">IT-продукты Kraftex</h2>
       <div className="products__content">
         <div className="products__column">
           <p className="products__text">Обменный пункт Cashwallet</p>
           <img src={cash} alt="cash"/>
           <p className="products__subtext">основан в 2017 г.</p>
           <button className="products__button">Перейти</button>
         </div>
         <div className="products__column">
           <p className="products__text">Kraftex Telegram Bot</p>
           <img src={kraft} alt="kraft"/>
           <p className="products__subtext">удобный доступ к услугам Kraftex
             из любой точки земного шара</p>
           <button className="products__button">Перейти</button>
         </div>
       </div>
     </div>
   </section>
  )
}

export default Products




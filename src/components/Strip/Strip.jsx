import React from 'react';
import './strip.css'
import one from '../../assets/img/whiteline/1.png'
import two from '../../assets/img/whiteline/2.png'
import three from '../../assets/img/whiteline/3.png'

const Strip = () => {
  return (
    <section className="strip container">
      <div className="strip__block">
        <div className="strip__section">
          <img className='strip__image' src={one} alt="one"/>
          <p className='strip__text'>Финансовые перестановки</p>
        </div>
        <div className="strip__section">
          <img className='strip__image' src={two} alt="two"/>
          <p className='strip__text'>Обмен валют</p>
        </div>
        <div className="strip__section">
          <img className='strip__image' src={three} alt="three"/>
          <p className='strip__text'>IT-продукты Kraftex</p>
        </div>
      </div>
    </section>
  )
}

export default Strip
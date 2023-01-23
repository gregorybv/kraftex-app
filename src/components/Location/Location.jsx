import React from 'react';
import './location.css'
import vektor from '../../assets/img/map/Vector 1.svg'
import vektor2 from '../../assets/img/map/Vector 2.svg'
import map from '../../assets/img/map/map.png'

const Location = () => {
  return (
    <section className="location container">
      <div className="location__block">
        <img className='location__vectortwo'  src={vektor2} alt="vektor2"/>
        <img className='location__vector' src={vektor} alt="vektor"/>
        <img className='location__map' src={map} alt="map"/>
      </div>
    </section>
  )
}

export default Location




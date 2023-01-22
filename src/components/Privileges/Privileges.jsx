import React from 'react';
import './privileges.css'
import man from '../../assets/img/privileges/man.svg'
import navigation from '../../assets/img/privileges/navigation.svg'
import shield from '../../assets/img/privileges/shield.svg'

const Privileges = () => {
  return (
    <section className="privileges container">
      <div className="privileges__block">
        <p className="privileges__header">Привилегии</p>
        <nav className="privileges__content">
          <ul className="privileges__column">
            <img src={man} alt="man"/>
            <li className="privileges__title">Персональный менеджер</li>
            <li className="privileges__subtitle">Доступен 24/7</li>
            <li className="privileges__text">Поможет выбрать подходящую услугу,
              соответствующую Вашим потребностям, и подробно ответит на любые
              вопросы
            </li>
          </ul>
          <ul className="privileges__column">
            <img src={navigation} alt="navigation"/>
            <li className="privileges__title">Отдельный офис и зоны обслуживания в каждой стране присутствия</li>
            <li className="privileges__subtitle">Ничего не отвлечет от сделки</li>
            <li className="privileges__text">Офис в центре Москвы и выделенные зоны в столицах и других крупных
              городах Азии, Европы, Среднего Востока и Северной Америки
            </li>
          </ul>
          <ul className="privileges__column">
            <img src={shield} alt="shield"/>
            <li className="privileges__title">Гарантии безопасности</li>
            <li className="privileges__subtitle">100% успешных сделок</li>
            <li className="privileges__text">Мы гарантируем, что Ваши
              активы будут в сохранности и достигнут пункта своего
              назначения несмотря на любые угрозы, санкции и ограничения
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Privileges




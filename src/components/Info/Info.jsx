import React from "react"
import "./info.css"

const Info = () => {
  return (
    <section className='info container'>
      <nav className='info__block'>
        <ul className='info__header'>
          <li className='info__title'>Наш подход</li>
          <li className='info__title'>Наша команда</li>
          <li className='info__title'>Наши услуги</li>
        </ul>
        <ul className='info__content'>
          <li className='info__subtitle'>
                        <span className='info__span'>
                            Ваши финансовые цели и задачи </span>
            — стартовый этап нашего партнёрства, а их достижение —
            основной показатель совместного успеха.
          </li>
          <li className='info__subtitle'>
            <span className='info__span'>Наша миссия: </span>
            «Полное выполнение поставленных задач с гарантией
            максимальной безопасности и личной ответственности».
          </li>
          <li className='info__subtitle'>
                        <span className='info__span'>
                            Платежные решения Kraftex </span>
            позволяют наши клиентам вести международную деятельность
            на финансовых рынках и эффективно управлять своим
            капиталом и денежными потоками благодаря:
          </li>
        </ul>
        <ul className='info__footer'>
          <ul className='info__text'>
            <li className='info__subtext'>
              богатому опыту работы в сфере финансов;
            </li>
            <li className='info__subtext'>
              безупречной репутации;
            </li>
            <li className='info__subtext'>
              проверенным контрагентам и партнерам;
            </li>
            <li className='info__subtext'>
              широкому спектру услуг и направлений;
            </li>
            <li className='info__subtext'>
              качественному офисному и онлайн-обслуживанию;
            </li>
          </ul>
          <ul className='info__text'>
            <li className='info__subtext'>
              собственной IT-инфраструктуре;
            </li>
            <li className='info__subtext'>
              высокому уровню безопасности сделок и денежных
              переводов;
            </li>
            <li className='info__subtext'>
              опциям взаимодействия с множеством валют и
              криптовалют;
            </li>
            <li className='info__subtext'>
              множеству постоянных клиентов;
            </li>
            <li className='info__subtext'>
              большим подтвержденным резервам;
            </li>
          </ul>
          <ul className='info__text'>
            <li className='info__subtext'>
              выгодным курсам конвертации и обмена;
            </li>
            <li className='info__subtext'>
              низким комиссиям за операции и услуги;
            </li>
            <li className='info__subtext'>
              оперативному оформлению документов;
            </li>
            <li className='info__subtext'>
              высокой скорости обслуживания;
            </li>
            <li className='info__subtext'>
              качественной клиентской поддержке;
            </li>
          </ul>
        </ul>
      </nav>
    </section>
  )
}

export default Info

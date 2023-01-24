import React from 'react';
import './clientsform.css'
import arrow from '../../../assets/img/clients/arrow.png'
import chit from '../../../assets/img/clients/chit.svg'


class ClientsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className='clients__form' onSubmit={this.handleSubmit}>
        <label className='clients__label'>
          Представьтесь, пожалуйста*
          <input className="clients__input" type="text"
                 onChange={this.handleChange}/>
        </label>
        <div className="clients__labels">
          <label className='clients__label'>
            Город*
            <input className="clients__input" type="text"
                   onChange={this.handleChange}/>
          </label>
          <label className='clients__label'>
            E-mail*
            <input className="clients__input" type="email"
                   onChange={this.handleChange}/>
          </label>
        </div>
        <label className='clients__label'>
          Номер телефона
          <input className="clients__input" type="tel"
                 onChange={this.handleChange}/>
        </label>
        <label className='clients__label'>
          Иной контакт для связи (например, Telegram)*
          <input className="clients__input" type="text"
                 onChange={this.handleChange}/>
        </label>
        <label className='clients__label'>
          Текст сообщения
          <input className="clients__input" type="text"
                 onChange={this.handleChange}/>
        </label>
        <button className="clients__button">
          Отправить
          <img className="button_arrow" src={arrow} alt="arrow"/>
        </button>
      </form>
    );
  }

  // value={this.state.value}
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ClientsForm />);
export default ClientsForm




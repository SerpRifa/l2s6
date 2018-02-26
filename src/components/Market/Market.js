import React, {Component} from 'react';
import './Market.css';
import {createOrder, moveOrderToFarm} from '../../actions/marketActions'
import Order from '../Order/Order'
import {connect} from 'react-redux';

let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

class Market extends Component {
  handleNewOrder = () =>{
    const { createOrder} = this.props;    
    createOrder(getNewOrder());    
  }

  handleToFarm = () =>{
    const {moveOrderToFarm, market} =this.props;
    const order = market.orders[market.orders.length-1];
    moveOrderToFarm(order);
  }

  componentDidUpdate(){
    this.setButtonToFarm();        
  }

  componentDidMount(){
    this.setButtonToFarm();
  }

  setButtonToFarm(){        
      const {market} = this.props;
      let button = document.querySelector('#toFarm');
      if(button==null) return;
      if(market.orders.length > 0){          
          button.removeAttribute('disabled');            
      }else{                      
          button.setAttribute('disabled', true);
      }
  }

  render() {
    const {market} = this.props;
    console.log(this.props);
    
    return <div className="market">
      <h2>Новые заказы в магазине</h2>      
      <div>
        <button className="new-orders__create-button" name="newOrder" onClick={this.handleNewOrder}>Создать заказ</button>
        <button id="toFarm" name="toFarm" onClick={this.handleToFarm}>Отправить заказ на ферму</button>
      </div>
      <div className="order-list">
         {market.orders.map((n, i )=>{           
          return  <Order key={i} name={n.name}  price={n.price} createdAt ={n.createdAt}/>
         })}
      </div>
    </div>;
  }
}

const mapStateToProps = state => ({
  market: state.market
});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);

import React, {Component} from 'react';
import './Farm.css';
import {moveOrderToCustomer} from '../../actions/farmActions'
import {connect} from 'react-redux';
import Order from '../Order/Order'

class Farm extends Component{

    componentDidUpdate(){
        this.setButtonToClient();        
      }
    
      componentDidMount(){
        this.setButtonToClient();
      }
          
      setButtonToClient(){        
          const {farm} = this.props;
          let button = document.querySelector('#toClient');
          if(button==null) return;
          if(farm.orders.length > 0){          
              button.removeAttribute('disabled');            
          }else{                      
              button.setAttribute('disabled', true);
          }
      }

    handleToClient = ()=>{
        const {moveOrderToCustomer, farm} =this.props;
        const order = farm.orders[farm.orders.length-1];
        moveOrderToCustomer(order);
    }
    render(){
        const {farm} = this.props;
        console.log('ферма', farm);
        return <div className="farm">        
            <h2>Производство на ферме</h2>
            <button id="toClient" name="toClient" onClick={this.handleToClient}>Отправить урожай клиенту</button>
            <div>
                {farm.orders.map(n=>{
                    return  <Order key={n.id} name={n.name}  price={n.price} createdAt ={n.createdAt}/>
                })}
            </div>
        </div>
    }
}

const mapStateToProps = state => ({
    farm: state.farm
  });

  const mapDispatchToProps = {
    moveOrderToCustomer   
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Farm);
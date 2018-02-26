import {
    CREATE_ORDER,
    MOVE_ORDER_TO_FARM
  } from '../actions/marketActions';

let  marketInit ={
    orders:[]
}
export default (state = marketInit, action) =>{
    
    switch(action.type){
       case CREATE_ORDER:{
            state.orders.push(action.payload);
            state = {...state};             
           return state;
       }
       case MOVE_ORDER_TO_FARM:{        
        let rez = state.orders.filter(n=>{return n.id!==action.payload.id});
        state.orders = rez == null?[]:rez;        
        state = {...state};
        return state;
      }
      default: return state;
    }
}
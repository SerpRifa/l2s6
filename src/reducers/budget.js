import {MOVE_ORDER_TO_CUSTOMER} from '../actions/farmActions';
import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM
} from '../actions/marketActions';

let budgetInit = {
    deliveryExpanse: 0,
    profit: 0,
    farmExpanse: 0,
    seller: 0
};

export default (state = budgetInit, action)=>{
    switch(action.type){
        case MOVE_ORDER_TO_CUSTOMER: 
            state.deliveryExpanse += 20;
            state = {...state};
            return state;
        case CREATE_ORDER:            
            state.profit += action.payload.price;
            state.seller += 20;
            state = {...state};
            return state;
        case MOVE_ORDER_TO_FARM:            
            state.farmExpanse += 100;
            state = {...state};
            return state;
        default: return state;
    }
}
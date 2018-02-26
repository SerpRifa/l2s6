import {MOVE_ORDER_TO_CUSTOMER} from '../actions/farmActions';
import {MOVE_ORDER_TO_FARM} from '../actions/marketActions';
let farmInit = {
    orders:[]
};
export default (state = farmInit, action)=>{
    switch(action.type){
        case MOVE_ORDER_TO_FARM: 
            state.orders.push(action.payload);
            state = {...state};
            console.log(state);
            return state;
        case MOVE_ORDER_TO_CUSTOMER:
            let rez = state.orders.filter(n=>{return n.id!==action.payload.id});
            state.orders = rez==null?[]:rez;
            state = {...state}
            return state;
        default: return state;
    }
}
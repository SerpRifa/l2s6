import budget from './budget'
import farm from './farm'
import market from './market'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    budget,
    farm,
    market
});

export default rootReducer;
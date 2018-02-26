import React, {Component} from 'react';
import './App.css';
import Market from '../Market/Market';
import Budget from '../Budget/Budget';
import Farm from '../Farm/Farm';
import {connect} from 'react-redux';


 class App  extends Component {

    render(){
        return <div className="app">
                <Market />
                <Farm />
                <Budget />
            </div>;
    }
 }

 export default App;
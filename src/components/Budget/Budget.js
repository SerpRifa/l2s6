import React, {Component} from 'react';
import './Budget.css';
import {connect} from 'react-redux';

class Budget extends Component {
    render(){
        const {budget:{profit, farmExpanse, deliveryExpanse, seller}} = this.props;
        return <div className="budget">
                <h2>Бюджет</h2>
                <p>Всего получено денег: <span className="t-profit">{profit}</span></p>
                <p>Расходы продавцов: <span className="t-sellers">-{seller}</span></p>
                <p>Расходы на ферме: <span className="t-farm">-{farmExpanse}</span></p>
                <p>Расходы на доставку: <span className="t-delivery">-{deliveryExpanse}</span></p>
                <p>Итого: <span className="t-total">{profit - farmExpanse - deliveryExpanse-seller}</span></p>
            </div>
    }
}

const mapStateToProps = state => ({
    budget: state.budget
  });
  const mapDispatchToProps = {};

  export default connect(mapStateToProps, mapDispatchToProps)(Budget);
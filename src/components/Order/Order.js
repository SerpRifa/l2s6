import React, {Component} from 'react';
import './Order.css';

export default ({name, price, createdAt})=>{
    console.log(createdAt);
    return <div className="order">
            <div className="order__upper">
                <p className="p--order">
                    Название: {name}
                </p>
                <p className="p--order">
                    Цена: <span className="order-price">{price}</span>
                </p>
            </div>
            <div className="order__lower">
                <p className="p--order">
                    Создан: {createdAt.toString()}
                </p>
            </div>
        </div>
}
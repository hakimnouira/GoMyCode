import React from 'react'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "../stateProvider/StateProvider"
import "./Subtotal.css"
import { getBasketTotal } from '../../reducer';
import {Link, useHistory} from "react-router-dom"
import "./Product.css"

import Product from "../productupdate/Product.js"
function update() {
    

    return (
        <Product
                            id={"a"}
                            title={"a"}
                            image={"a"}
                            price={"a"}
                          
                        />
    )
}

export default update

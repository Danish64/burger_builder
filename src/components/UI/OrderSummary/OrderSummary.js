import React from 'react';
import Aux from '../../../hoc/Aux';

const OrderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients)
    .map( igKey => {
        return <li key={igKey}>
            <span style={{ textTransform : 'capitalize' }}>{igKey}</span> : {props.ingredients[igKey]}
        </li>
    });

    return (
        <Aux>
            <h3>Your Order </h3>
            <p>Your Karro Na Burger is ready with these viruses </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Ready to checkout ! </p>

        </Aux>
    );
};

export default OrderSummary;
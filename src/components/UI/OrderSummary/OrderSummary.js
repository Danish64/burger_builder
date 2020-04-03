import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../Button/Button';

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

            <p>Total Payment Will Be : <strong>{props.priceUptill}</strong> with Love.</p>
            <p>Ready to checkout ! </p>

            <Button btnType="Danger" clicked={props.purchasingCancelHandler}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked = {props.purchaseContinueHandler}>CONTINUE</Button>
        </Aux>
    );
};

export default OrderSummary;
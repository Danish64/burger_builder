import React from 'react';
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';



const controls = [
    {label : 'Salad', type: 'salad'},
    {label : 'Cheese', type: 'cheese'},
    {label : 'Meat', type: 'meat'},
    {label : 'Bacon', type: 'bacon'}
]

const BuildControls = (props) => {


    return (
        <div className={styles.BuildControls}>
            <p>Current Price : <strong>{props.price}</strong> Rs.</p>
            {controls.map( ctrl => ( 
                <BuildControl 
                    key={ctrl.label}
                    label={ctrl.label}
                    added = {() => props.ingredientsAdd(ctrl.type)}
                    remove = {() => props.ingredientsRemove(ctrl.type)}
                    disabled = {props.disabledInfo[ctrl.type]}  />
            ) )}

            <button
                className={styles.OrderButton}
                disabled={!props.purchaseable}
                onClick={props.ordered}>
                Order Now
            </button>
            
        </div>
    );
};

export default BuildControls;
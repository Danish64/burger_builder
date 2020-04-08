import React from 'react';
import styles from './Order.module.css';

const Order = (props) => { 

    const ingredientsArray = [];
    for (let ingredientName in props.ingredients){
        ingredientsArray.push({Ingredient : ingredientName, 
                                Amount : props.ingredients[ingredientName]})
    }
    //console.log(ingredientsArray);
    const ingredientOutput = ingredientsArray.map(ig =>{
            return <span
                style={{
                    textTransform : 'capitalize',
                    display:'inline-block',
                    margin :'0 8px',
                    border : '1px solid #ccc',
                    padding:'5px'
                }}
                key={ig.Ingredient}
                >
                    {ig.Ingredient} ({ig.Amount}) 
            </span>
    });

    return (
        <div className={styles.Order}>
            <p>Ingredients : {ingredientOutput}</p>
            <p>Price : <strong>PKR : {props.price}</strong></p>
        </div>
    );
};

export default Order;
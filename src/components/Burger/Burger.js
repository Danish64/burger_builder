import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import styles from './Burger.module.css';

const Burger = (props) => {

    
    let ingredientsArray = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array( props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredients key={igKey + i} type={igKey}/>

            });
        })
        .reduce((arr, el)=>{
            return arr.concat(el)
        },[]);

    // console.log(Object.keys(props.ingredients))
    // console.log(ingredientsArray)

    if(ingredientsArray.length === 0){ ingredientsArray = <p>Start Making Your Burger !</p> }

    return (

        <div className={styles.Burger}>
            <BurgerIngredients type="bread-top"/>
            {ingredientsArray}
            <BurgerIngredients type="bread-bottom"/>

        </div>
    );
};

export default Burger;
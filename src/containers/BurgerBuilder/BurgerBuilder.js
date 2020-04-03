import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildContorls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/UI/OrderSummary/OrderSummary';



const ingredientsPrice = {
    meat : 150,
    salad : 30,
    bacon : 50,
    cheese :20
}


class BurgerBuilder extends Component {

    state = {
        ingredients : {
            meat : 0,
            salad : 0,
            bacon : 0,
            cheese :0
        },
        totalPrice : 50,
        purchaseable : false,
        purchasing : false
    }   


    purchasingHandler = () => {
        this.setState({purchasing : true})
    }

    purchasingCancelHandler = () => {
        this.setState({purchasing : false})
    }
    
    purchaseContinueHandler = () =>{
        alert('Your Purchase has been made ! ')
    }
    
    updatePurchaseable (ingredients) {

        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => 
        {
            return sum + el;
        } ,0);

        this.setState({purchaseable : sum > 0 });

    }


    addIngredientsHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        const newIngredientCount = oldIngredientCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = newIngredientCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + ingredientsPrice[type];
        
        this.setState({
            ingredients : updateIngredients,
            totalPrice : newPrice
        });
        this.updatePurchaseable(updateIngredients);
    }

    removeIngredientsHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        if( oldIngredientCount === 0){
         return ;  
        }
        
        const newIngredientCount = oldIngredientCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = newIngredientCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - ingredientsPrice[type];
        
        this.setState({
            ingredients : updateIngredients,
            totalPrice : newPrice
        });
        this.updatePurchaseable(updateIngredients);
    }
        
    

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        //console.log(disabledInfo);

        return (
            <Aux>

                
                <Modal show={this.state.purchasing} modalClose={this.purchasingCancelHandler}>
                    <OrderSummary 
                        purchaseContinueHandler={this.purchaseContinueHandler}
                        purchasingCancelHandler={this.purchasingCancelHandler}
                        ingredients={this.state.ingredients}
                        priceUptill = {this.state.totalPrice}
                        />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientsAdd={this.addIngredientsHandler}
                    ingredientsRemove ={this.removeIngredientsHandler}
                    disabledInfo = {disabledInfo}
                    price={this.state.totalPrice}
                    ordered = {this.purchasingHandler}
                    purchaseable = {this.state.purchaseable}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
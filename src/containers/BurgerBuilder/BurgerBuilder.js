import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildContorls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/UI/OrderSummary/OrderSummary';
import instance from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const ingredientsPrice = {
    meat : 150,
    salad : 30,
    bacon : 50,
    cheese :20
}


class BurgerBuilder extends Component {

    state = {
        ingredients : null,
        totalPrice : 50,
        purchaseable : false,
        purchasing : false,
        loading : false,
        error: false
    }   

    componentDidMount(){

        
        instance.get('/ingredients.json')
            .then(response => {
                this.setState({ingredients : response.data})
            })
            .catch(error => this.setState({error : true}))

    }

    purchasingHandler = () => {
        this.setState({purchasing : true})
    }

    purchasingCancelHandler = () => {
        this.setState({purchasing : false})
    }
    
    purchaseContinueHandler = () =>{
        const queryParams = [];
        
        for (let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price='+this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname : '/checkout',
            search  : '?' + queryString
        });

        

        
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

        let orderSummary = null;
        
        let burger =this.state.error ?  <p> Oops! Your ingredients are not ready  </p>: <Spinner />
        if(this.state.ingredients){
            burger = (<Aux>
                        <Burger ingredients={this.state.ingredients}/>
                        <BuildControls 
                            ingredientsAdd={this.addIngredientsHandler}
                            ingredientsRemove ={this.removeIngredientsHandler}
                            disabledInfo = {disabledInfo}
                            price={this.state.totalPrice}
                            ordered = {this.purchasingHandler}
                            purchaseable = {this.state.purchaseable}/>
                    </Aux>) 

            orderSummary= <OrderSummary 
            purchaseContinueHandler={this.purchaseContinueHandler}
            purchasingCancelHandler={this.purchasingCancelHandler}
            ingredients={this.state.ingredients}
            priceUptill = {this.state.totalPrice}
            /> ;
        }
        if (this.state.loading){orderSummary = <Spinner />}

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClose={this.purchasingCancelHandler}>
                    {orderSummary}
                </Modal>
                { burger }
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder,  instance);
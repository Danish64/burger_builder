import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckOutSummary/CheckoutSummary';
import  {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state={
        ingredients : null,
        totalPrice : 0
    }

    componentWillMount (){
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        let price = 0;
        for(let param of query.entries()){
            //['meat', '2']
            //prefixing the plus sign for converting to number(
            console.log(param[0]);
            if(param[0] === 'price'){
                console.log(price);
                price = +param[1]
                
            }else {
                ingredients[param[0]] = +param[1]
            }

        }
        

        this.setState({ingredients:ingredients, totalPrice : price})
    }

    checkOutCancellHandler = () =>{
        this.props.history.goBack();
    }

    checkOutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            
            <div>
                <CheckoutSummary 
                    checkOutCancel = {this.checkOutCancellHandler}
                    checkOutContinue ={this.checkOutContinueHandler}
                    ingredients={this.state.ingredients}
                    />
                <Route 
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>)}/>
            </div>
        );
    }
}

export default Checkout;
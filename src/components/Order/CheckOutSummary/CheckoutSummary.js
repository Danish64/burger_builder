import React, { Component } from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.module.css';

class CheckoutSummary extends Component {
    render() {
        return (

            <div className={styles.CheckoutSummary}>
                <h1>Here's The Korono Burger !</h1>

                <div style={{width : '100%', margin:'auto'}}>
                        <Burger ingredients={this.props.ingredients}/>
                </div>
                <Button 
                    clicked = {this.props.checkOutCancel}
                    btnType="Danger"
                    >CANCEL</Button>
                <Button 
                    clicked= {this.props.checkOutContinue}
                    btnType="Success"
                    >CONTINUE</Button>


            </div>
            
        );
    }
}

export default CheckoutSummary;
import React, { Component } from 'react';
import styles from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import instance from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

    state = {
        name : '',
        email : '',
        address: {
            street : ' ',   
            postCode : ' '
        }
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({loading : true})
        const order = {
            ingredients : this.props.ingredients,
            price : this.props.price,
            customer : {
                name : "Danish Ali",
                address : {
                    street : 'SixtyFourStreet',
                    zipcode : '44000',
                    country : 'Pakistan'
                },
                email:'Me@me.com'
            },
            deliveryMethod : 'fastest',
            loading : false
        }

        instance.post('/orders.json', order)
            .then(response =>{
                this.setState({loading : false});
                this.props.history.push('/'); 
            })
            .catch(error => this.setState({loading : false}));
    }
    render() {

        let form = (
            <form>
                <input className={styles.Input} type="text" name="name" placeholder="Enter the Name"/>
                <input className={styles.Input} type="email" name="email" placeholder="Enter the Email"/>
                <input className={styles.Input} type="text" name="street" placeholder="Enterstreet"/>
                <input className={styles.Input} type="text" name="postCode" placeholder="Enter the Postal Address"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>

            </form>
        );

        if(this.state.loading){
            form = <Spinner />
        }

        return (

            
            <div className={styles.ContactData}>
                <h4>Enter Your Code : </h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state ={
        order:[],
        loading : true

    }

    componentDidMount(){
        axios.get('/orders.json')
            .then(res => {
                //console.log(res.data)
                const fetchedOrders = [];
                //Key is the id that firebase attaches to the object while creating
                for(let key in res.data){
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading : false, order:fetchedOrders})
            })
            .catch(error => {
                this.setState({loading : false})
            })
    }

    render() {
        


        return (

            <div>
                {this.state.order.map(order => (
                    <Order 
                        key={order.id}
                        price={order.price}
                        ingredients={order.ingredients}
                    />
                ))}
            </div>
            

        );
    }
}

export default withErrorHandler(Orders, axios);
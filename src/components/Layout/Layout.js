import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';



class Layout extends Component {

    state = {
        showSideDrawer:false
    }

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer:false});
    }



    render() {
        return (
            <Aux>
                <Toolbar />
                <Sidedrawer 
                    open={this.state.showSideDrawer}
                    closed={this.closeSideDrawerHandler}
                    />
                <main className={styles.main}>
                    {this.props.children}
                </main>
        </Aux>
        );
    }
}

export default Layout;


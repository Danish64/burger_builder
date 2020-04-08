import React from 'react';
import styles from './DrawerToggler.module.css';

const DrawerToggler = (props) => {
    return (
        <div 
            className={styles.DrawerToggle}
            onClick={props.drawerToggler}>
                    <div></div>
                    <div></div>
                    <div></div>
        </div>
    );
};

export default DrawerToggler;
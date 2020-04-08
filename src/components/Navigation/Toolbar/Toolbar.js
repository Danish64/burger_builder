import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggler from '../Sidedrawer/DrawerToggler/DrawerToggler';

const Toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <DrawerToggler drawerToggler={props.click}/>
            <div className={styles.Logo}>
                 <Logo />
            </div>
            
            <nav className={styles.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;
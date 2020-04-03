import React from 'react';
import logo from '../../assets/images/logo.png';
import styles from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={styles.Logo}>
            <img src={logo} alt="Logo Error"/>
        </div>
    );
};

export default Logo;
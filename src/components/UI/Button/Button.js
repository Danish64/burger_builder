import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    
    let typeStyle = null;
    if(props.btnType === "Danger"){
        typeStyle = styles.Danger;
    }else {typeStyle = styles.Success}

    return (
        <button
            className = {[styles.Button, typeStyle].join(' ')}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    );
};

export default Button;
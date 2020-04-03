import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css'

const Layout = (props) => {
    return (

        <Aux>
            <div>
                ToolBar ---- Side Drawer ---- Backdrop
            </div>

            <main className={styles.main}>
                {props.children}
            </main>
        </Aux>
        
    );
};

export default Layout;
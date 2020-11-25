import React from 'react';

import Menu from '../components/Menu';
import Footer from '../components/Footer';


const Base = props => {
    return (
        <div className="container">
            <Menu />
            {props.children}
            <Footer />
        </div>
    )
}


export default Base;
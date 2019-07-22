import React from 'react';
import '../gen.css';
const Display = (props) => {
    return (
        <li className={props.prod.status}>
            Expense:{props.prod.expense}<br/>
            Desc:{props.prod.desc}<br/>
            Price:{props.prod.price}
        </li>
    );
}

export default Display;
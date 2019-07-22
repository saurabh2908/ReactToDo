import React from 'react';
const Display = (props) => {
    return (
        <li>
            Expense:{props.prod.expense}<br/>
            Desc:{props.prod.desc}<br/>
            Price:{props.prod.price}
        </li>
    );
}

export default Display;
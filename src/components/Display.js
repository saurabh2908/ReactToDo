import React from 'react';
import '../gen.css';
const Display = (props) => {
    return (
        
        <li className={props.prod.status} >
            Expense:&nbsp;{props.prod.expense}&nbsp;&nbsp;&nbsp;&nbsp;
            Desc:&nbsp;{props.prod.desc}<br/>
            Price:&nbsp;{props.prod.price}&nbsp;&nbsp;&nbsp;
            <button className="btn btn-warning">Edit</button>
        </li>
        
    );
}

export default Display;
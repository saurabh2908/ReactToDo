import React from 'react';
import '../gen.css';
import Edit from './Edit';
import {useState} from 'react';
const Display = (props) => {
    const [flag, setflag] = useState(true);
    var tim;
    if(flag==false){
        tim=<Edit/>
    }
    return (
       <li className={props.prod.status} >
            Expense:&nbsp;{props.prod.expense}&nbsp;&nbsp;&nbsp;&nbsp;
            Desc:&nbsp;{props.prod.desc}<br/>
            Price:&nbsp;{props.prod.price}&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{
           setflag(!flag);
           console.log('flag is ',flag);
            }} className="btn btn-warning">Edit</button>
            {tim}
        </li>
   
    );
}

export default Display;
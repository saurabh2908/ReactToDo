import React from 'react';
import Display from './Display';
import '../gen.css';
const List = (props) => {
    return (
       <div >
         <ol>
            {props.arr.map((one)=><Display prod={one} index={props.arr.indexOf(one)} update={props.update}/>)}
         </ol>
       </div>
    );
}



export default List;
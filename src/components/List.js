import React from 'react';
import Display from './Display';
const List = (props) => {
    return (
       <div >
         <ol>
            {props.arr.map((one)=><Display prod={one}/>)}
         </ol>
       </div>
    );
}



export default List;
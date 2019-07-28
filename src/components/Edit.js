import React from 'react';
const Edit = (props) => {
 var obj={};
    return (
        <>
  <div className="form-row container mt-3">
    <div className="form-group col-md-6">
      <label>New Expenses</label>
      <input onChange={(e)=>{
        obj['expense']=e.target.value;
      }} type="text" className="form-control" id="expense" placeholder="Expense"/>
    </div>
    <div className="form-group col-md-6">
      <label >New Price</label>
      <input onChange={(e)=>{
        obj['price']=e.target.value;
      }} type="number" className="form-control" id="price" placeholder="Price"/>
    </div>
  </div>
  <div className="form-group">
    <label >New Description</label>
    <input onChange={(e)=>{
      obj['desc']=e.target.value;
    }} type="text" className="form-control" id="desc" placeholder="Enter description"/>
  </div>
   <div className="form-group col-md-4">
      <label for="inputState">Status</label>
      <select onChange={(e)=>{
        obj['status']=e.target.value;
      }} id="status" className="form-control">
        <option hidden>Choose...</option>
        <option value="paid">Paid</option>
        <option value="unpaid">Unpaid</option>
      </select>
    </div> 

   
<button onClick={()=>{
  console.log('the edit clicked is',props.index);
  props.update(obj,props.index);
}}  type="submit" className="btn btn-success">SAVE</button>
</>
    );
}

export default Edit;
import React from 'react';
const Add = (props) => {
    return (
        <form>
  <div className="form-row container mt-3">
    <div className="form-group col-md-6">
      <label>Expenses</label>
      <input onChange={props.input} type="text" className="form-control" id="expense" placeholder="Expense"/>
    </div>
    <div className="form-group col-md-6">
      <label >Price</label>
      <input onChange={props.input} type="number" className="form-control" id="price" placeholder="Price"/>
    </div>
  </div>
  <div className="form-group">
    <label >Description</label>
    <input onChange={props.input} type="text" className="form-control" id="desc" placeholder="Enter description"/>
  </div>
   <div className="form-group col-md-4">
      <label for="inputState">Status</label>
      <select onChange={props.input} id="status" className="form-control">
        <option hidden>Choose...</option>
        <option value="paid">Paid</option>
        <option value="unpaid">Unpaid</option>
      </select>
    </div> 

   
<button onClick={props.add} type="submit" className="btn btn-success">ADD</button>
</form>
    );
}

export default Add;
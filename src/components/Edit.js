import React from 'react';
const Add = (props) => {
    return (
        <form>
  <div className="form-row container mt-3">
    <div className="form-group col-md-6">
      <label>New Expenses</label>
      <input  type="text" className="form-control" id="expense" placeholder="Expense"/>
    </div>
    <div className="form-group col-md-6">
      <label >New Price</label>
      <input  type="number" className="form-control" id="price" placeholder="Price"/>
    </div>
  </div>
  <div className="form-group">
    <label >New Description</label>
    <input  type="text" className="form-control" id="desc" placeholder="Enter description"/>
  </div>
   <div className="form-group col-md-4">
      <label for="inputState">Status</label>
      <select id="status" className="form-control">
        <option hidden>Choose...</option>
        <option value="paid">Paid</option>
        <option value="unpaid">Unpaid</option>
      </select>
    </div> 

   
<button  type="submit" className="btn btn-success">SAVE</button>
</form>
    );
}

export default Add;
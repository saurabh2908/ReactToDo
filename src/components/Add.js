import React from 'react'
const Add = () => {
    return (
        <form>
  <div className="form-row container mt-3">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Expenses</label>
      <input type="text" className="form-control" id="expense" placeholder="Expense"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Price</label>
      <input type="number" className="form-control" id="price" placeholder="Price"/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Description</label>
    <input type="text" className="form-control" id="desc" placeholder="Enter description"/>
  </div>
   {/* <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>*/}

    <div className="form-check form-check-inline">
    <input className="form-check-input" type="checkbox" id="check" name="status" value="paid"/>
    <label className="form-check-label" for="inlineCheckbox1">Paid</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" type="checkbox" id="check" name="status" value="unpaid"/>
    <label className="form-check-label" for="inlineCheckbox2">Unpaid</label>
  </div>
  <button type="submit" className="btn btn-primary">ADD</button>
</form>
    );
}

export default Add;
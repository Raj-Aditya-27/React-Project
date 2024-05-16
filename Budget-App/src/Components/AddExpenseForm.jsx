import React from "react";

function AddExpenseForm() {
  return (
    <form>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required className="form-control" />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input type="text" id="cost" required className="form-control" />
        </div>
        <div className="col-sm mt-4">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </div>
    </form>
  );
}

export default AddExpenseForm;

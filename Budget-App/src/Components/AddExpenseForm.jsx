import React, { useState } from "react";

function AddExpenseForm() {

  const [text, setText] = useState("");
  const [amount,setAmount]=useState();

  return (
    <form>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} id="name" required className="form-control" />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} id="cost" required className="form-control" />
        </div>
        <div className="col-sm mt-4">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </div>
    </form>
  );
}

export default AddExpenseForm;

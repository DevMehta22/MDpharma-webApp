import React, { useState } from "react";

const AddStock = () => {
  const [Item_name, setItem_name] = useState("");
  const [Item_Qty, setItem_QTY] = useState("");
  const [Item_MRP, setItem_MRP] = useState("");
  const [Item_margin, setItem_margin] = useState("");
  const [Item_scheme, setItem_scheme] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/stock/additem", {
      method: "post",
      body: JSON.stringify({
        Item_name,
        Item_Qty,
        Item_MRP,
        Item_margin,
        Item_scheme,
      }),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(()=>
        {
         alert("Data Added Successfully") 
        setItem_name("");
        setItem_QTY("");
        setItem_MRP("");
        setItem_margin("");
        setItem_scheme("");
      
      }
      );
  };

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Itemname"
            required="true"
            value={Item_name}
            onChange={(e) => {
              setItem_name(e.target.value);
            }}
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Item_Qty"
            required="true"
            value={Item_Qty}
            onChange={(e) => {
              setItem_QTY(e.target.value);
            }}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">INR</span>
          <input
            type="number"
            className="form-control"
            required="true"
            value={Item_MRP}
            onChange={(e) => {
              setItem_MRP(e.target.value);
            }}
          />
          <span className="input-group-text">.00</span>
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="margin"
            required="true"
            value={Item_margin}
            onChange={(e) => {
              setItem_margin(e.target.value);
            }}
          />
          <label className="form-control mx-2 mb-3">
            Scheme:
            <input
              type="string"
              className="true mx-2"
              name="boolean"
              placeholder="true/false"
              
              value={Item_scheme}
              onChange={(e) => {
                setItem_scheme(e.target.value)
               if(e.target.value==="true"){
                setItem_scheme(true)
               }
               else if(e.target.value==="false"){
                setItem_scheme(false)
               }
              
              }}
            />
          </label>
        </div>

        <div className="input-group mx-3">
          <span
            className="isd mx-3 bg-light"
            style={{ padding: "5px", borderRadius: "7px" }}
          >
            DateOfIssue:
          </span>
          <input type="date" />
        </div>
        <button
          type="submit"
          className="submit"
          style={{
            padding: "5px",
            borderRadius: "10px",
            backgroundColor: "darkcyan",
          }}
        >
          AddItem
        </button>
      </form>
    </>
  );
};

export default AddStock;

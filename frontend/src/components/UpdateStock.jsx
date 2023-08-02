import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateStock = () => {
    const id = useParams().id;
    const [input,setinput]=useState({})

    useEffect(()=>{
       const fetchHandler = async()=>{
        await fetch(`http://localhost:4000/api/stock/getitem/${id}`)
        .then((res)=> res.json())
        .then((data)=>setinput(data.Item))
       } 
       fetchHandler();
    },[id])

    const [Item_name, setItem_name] = useState(input.Item_name);
  const [Item_Qty, setItem_Qty] = useState(input.Item_Qty);
  const [Item_MRP, setItem_MRP] = useState(input.Item_MRP);
  const [Item_margin, setItem_margin] = useState(input.Item_margin);
  const [Item_scheme, setItem_scheme] = useState(input.Item_scheme);

    const handleSubmit =async(e)=>{
      e.preventDefault()
      console.log("clicked")
      await fetch(`http://localhost:4000/api/stock/updateitem/${id}`,{
        method:"put",
        body:JSON.stringify(
       {
        Item_name,Item_Qty,Item_MRP,Item_margin,Item_scheme
       }
        ),
        headers: {
          "content-Type": "application/json",
        },
      })
      .then((res) => res.json())
      .then((data)=>{console.log(data)})
    }
   
    
  
  return (
    <div>
     
      <form className="container" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Itemname"
            required      
            value={input.Item_name}
            onChange={()=>{
              alert("Field name can't be changed")
            }
            }
            
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Item_Qty"
            required
            value={Item_Qty}
            onChange={(e)=>{
              setItem_Qty(
                e.target.value
              )
            }}
            
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">INR</span>
          <input
            type="number"
            className="form-control"
            required
            value={Item_MRP}
            onChange=
              {(e)=>{
                setItem_MRP(
                  e.target.value
                )
              }}
            
          />
          <span className="input-group-text">.00</span>
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="margin"
            required
            value={Item_margin}
            onChange=
              {(e)=>{
                setItem_margin(
                  e.target.value
                )
              }}
            
          />
          <label className="form-control mx-2 mb-3">
            Scheme:
            <input
              type="text"
              className="true mx-2"
              required
              placeholder='true/false'
              value={Item_scheme}
              onChange=
                {(e)=>{
                  setItem_scheme(
                    e.target.value
                  )
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
          UpdateItem
        </button>
      </form>
    </div>
  )
}

export default UpdateStock

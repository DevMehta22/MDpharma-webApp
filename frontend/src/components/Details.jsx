import React, { useEffect, useState } from "react";
import './Details.css' 
import { Link} from "react-router-dom";

const Details = () => {

 
 
  const [Item, setItem] = useState([]);
  

  useEffect(()=>{
    handleClick()
  })

  const handleClick = async() => {
    await fetch("http://localhost:4000/api/stock/getitems", {
      method: "get",
      headers: {
        "content-Type": "application/json/boolean",
      },
    })
      .then(res=>res.json())
      .then(data =>setItem(data.Item));
  };

  
  const HandleDelete=async(id)=>{
      const response = await fetch(`http://localhost:4000/api/stock/deleteitem/${id}`,{
        method:"DELETE",
      });
    try{
      // const result = await response.json();
      if(response.ok){
        alert("Data Deleted Successfully")
     
      }
      else if(!response.ok){
        alert("error")
      }  
    }
      catch(err){
        console.log(err);
      }

     
  }
  

  

  return (
    <div className="container my-3">
      <h2
        style={{
          color: "white",
          fontFamily: "cursive",
        }}
      >
        <center>---ITEM DETAILS---</center>
      </h2>
      <div className="stock">
        {Item.map(name =>(
          <div className="main" key={name._id}>  
            <ul>
            <li className="name"><b>{name.Item_name}</b></li>
            <li className="Sub">Qty:{name.Item_Qty}</li>
            <li className="Sub">MRP:{name.Item_MRP}</li>
            <li className="Sub">Margin:{name.Item_margin}</li>
            <li className="Sub">Scheme:{name.Item_scheme}</li>
            <Link className="bg-primary mx-5 my-3" role="button" to={`/getitem/${name._id}`} style={{marginBottom:"7px",textAlign:"center",textDecoration:"none" ,borderRadius:"10px",padding:"7px",color:"white"}}>Update</Link>
            <Link className="bg-danger mx-5 my-3" role="button" onClick={()=>HandleDelete(name._id)} style={{margin:"7px",textAlign:"center",textDecoration:"none" ,borderRadius:"10px",padding:"7px",color:"white "}}>Delete</Link>
            
            </ul>
          </div>
        ))}
        
      </div>
    
    </div>
  );
};

export default Details;

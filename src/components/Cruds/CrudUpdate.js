import React from "react";
import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";

const CrudUpdate = () => {

    const initialState = {
        productsName : "",
        price : ""
    };
     
    const [crud, setCrud] = useState(initialState);

    const {_id} = useParams();
    const navigate = useNavigate();

    useEffect( () => 
    {
        async function fetchCrudData()
        {
            try{
                
                const response = await axios.get(`http://localhost:8080/api/cruds/${_id}`);
                setCrud (response.data);
            }
            catch(error)
            {
                console.log(error);
                console.log("can't fit interface data updation");
            }
        }
        fetchCrudData();
    },[_id]);

    function handlesubmit(event)
    {
        event.preventDefault();
        async function UpdateCrud()
        {
            try
            {
              await axios.patch(`http://localhost:8080/api/cruds/${_id}`, crud);
                navigate(`/cruds/${_id}`);
            }
            catch(error)
            {
                console.log("Update fail");
            }
        }
        UpdateCrud();
    };
    function handlechange(event)
    {
     
        setCrud({...crud, [event.target.name]: event.target.value});
    }

        return(
            <div>
                <h1>
                    Edit Crud operation
                </h1>
                <form className="Crudupdate" onSubmit={handlesubmit}>
                   <label>productsName</label>
                   <input
                    name="productsName" 
                   type="text"
                   value={crud.productsName}
                   onChange={handlechange}
                   />
                    <label>price</label>
                   <input 
                    name="price"
                   type="text"
                   value={crud.price}
                   onChange={handlechange}
                   />

                   <button type="submit">
                  Update
                   </button>
                </form>
            </div>
        )
}

export default CrudUpdate;
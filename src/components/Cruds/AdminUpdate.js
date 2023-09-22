import React from "react";
import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";

const AdminUpdate = () => {

    const initialState = {
        AdminName : "",
        AdminAge : ""
    };
     
    const [admin, setAdmin] = useState(initialState);

    const {_id} = useParams();
    const navigate = useNavigate();

    useEffect( () => 
    {
        async function fetchAdminData()
        {
            try{
                
                const response = await axios.get(`http://localhost:8080/api/admins/${_id}`);
                setAdmin (response.data);
            }
            catch(error)
            {
                console.log(error);
                console.log("can't fit interface data updation");
            }
        }
        fetchAdminData();
    },[_id]);

    function handlesubmit(event)
    {
        event.preventDefault();
        async function UpdateAdmin()
        {
            try
            {
              await axios.patch(`http://localhost:8080/api/admins/${_id}`, admin);
                navigate(`/admins/${_id}`);
            }
            catch(error)
            {
                console.log("Update fail");
            }
        }
        UpdateAdmin();
    };
    function handlechange(event)
    {
     
        setAdmin({...admin, [event.target.name]: event.target.value});
    }

        return(
            <div>
                <h1>
                    Edit Crud operation
                </h1>
                <form className="adminupdate" onSubmit={handlesubmit}>
                   <label>AdminName</label>
                   <input
                    name="AdminName" 
                   type="text"
                   value={admin.AdminName}
                   onChange={handlechange}
                   />
                    <label>AdminAge</label>
                   <input 
                    name="AdminAge"
                   type="text"
                   value={admin.AdminAge}
                   onChange={handlechange}
                   />

                   <button type="submit">
                  Update
                   </button>
                </form>
            </div>
        )
}

export default AdminUpdate;
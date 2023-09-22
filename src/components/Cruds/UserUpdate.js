import React from "react";
import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";

const UserUpdate = () => {

    const initialState = {
        Firstname : "",
        Middlename : "",
        Lastname : "",
        Email : "",
        Mobile : "",
        Password : "",
    };
     
    const [user, setUser] = useState(initialState);

    const {_id} = useParams();
    const navigate = useNavigate();

    useEffect( () => 
    {
        async function fetchUserData()
        {
            try{
                
                const response = await axios.get(`http://localhost:8080/api/users/${_id}`);
                setUser (response.data);
            }
            catch(error)
            {
                console.log(error);
                console.log("can't fit interface data updation");
            }
        }
        fetchUserData();
    },[_id]);

    function handlesubmit(event)
    {
        event.preventDefault();
        async function UpdateUser()
        {
            try
            {
              await axios.patch(`http://localhost:8080/api/users/${_id}`, user);
                navigate(`/users/${_id}`);
                
            }
            catch(error)
            {
                console.log("Update fail");
            }
        }
        UpdateUser();
    };
    function handlechange(event)
    {
     
        setUser({...user, [event.target.name]: event.target.value});
    }

        return(
            <div>
                <h1>
                    Edit Crud operation
                </h1>
                <form className="userupdate" onSubmit={handlesubmit}>
                   <label>Firstname</label>
                   <input
                    name="Firstname" 
                   type="text"
                   value={user.Firstname}
                   onChange={handlechange}
                   />
                    <label>Middlename</label>
                   <input 
                    name="Middlename"
                   type="text"
                   value={user.Middlename}
                   onChange={handlechange}
                   />
                    <label>Lastname</label>
                   <input 
                    name="Lastname"
                   type="text"
                   value={user.Lastname}
                   onChange={handlechange}
                   />
                    <label>Email</label>
                   <input 
                    name="Email"
                   type="text"
                   value={user.Email}
                   onChange={handlechange}
                   />
                    <label>Mobile</label>
                   <input 
                    name="Mobile"
                   type="text"
                   value={user.Mobile}
                   onChange={handlechange}
                   />
                    <label>Password</label>
                   <input 
                    name="Password"
                   type="text"
                   value={user.Password}
                   onChange={handlechange}
                   />

                   <button type="submit">
                  Update
                   </button>
                </form>
            </div>
        )
}

export default UserUpdate;
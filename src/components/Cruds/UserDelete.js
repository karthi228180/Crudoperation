import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function UserDelete(props) {
const [user, setUser] = useState({});
const {_id} = useParams();
const navigate = useNavigate();

useEffect(
    () =>
     {
   
        async function deleteUserById()
        {
            try{
                const response = await axios.get(`http://localhost:8080/api/users/${_id}`);
                setUser(response.data);
            }
            catch(error)
            {
                console.log("error");
            }
        }
        deleteUserById();
    },[_id]
);

async function handleDelete()
{
    try{
        await axios.delete(`http://localhost:8080/api/users/${_id}`);
        navigate("/users");
    }
    catch(error)
    {
        console.log("error");
    }
}
 return(
        <div className='delete2'>
            <h2>
                {user.Firstname}
            </h2>
            <p>Middlename</p> : {user.Middlename}
            <button onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
 }

export default UserDelete
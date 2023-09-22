import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function AdminDelete(props) {
const [admin, setAdmin] = useState({});
const {_id} = useParams();
const navigate = useNavigate();

useEffect(
    () =>
     {
   
        async function deleteAdminById()
        {
            try{
                const response = await axios.get(`http://localhost:8080/api/admins/${_id}`);
                setAdmin(response.data);
            }
            catch(error)
            {
                console.log("error");
            }
        }
        deleteAdminById();
    },[_id]
);

async function handleDelete()
{
    try{
        await axios.delete(`http://localhost:8080/api/admins/${_id}`);
        navigate("/admins");
    }
    catch(error)
    {
        console.log("error");
    }
}
 return(
        <div className='delete3'>
            <h2>
                {admin.AdminName}
            </h2>
            <p>AdminAge</p> : {admin.AdminAge}
            <button onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
 }

export default AdminDelete
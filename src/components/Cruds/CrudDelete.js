import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function CrudDelete(props) {
const [crud, setCrud] = useState({});
const {_id} = useParams();
const navigate = useNavigate();

useEffect(
    () =>
     {
   
        async function deleteCrudById()
        {
            try{
                const response = await axios.get(`http://localhost:8080/api/cruds/${_id}`);
                setCrud(response.data);
            }
            catch(error)
            {
                console.log("error");
            }
        }
        deleteCrudById();
    },[_id]
);

async function handleDelete()
{
    try{
        await axios.delete(`http://localhost:8080/api/cruds/${_id}`);
        navigate("/cruds");
    }
    catch(error)
    {
        console.log("error");
    }
}
 return(
        <div className="delete1">
            <h4> {crud.productsName}</h4>
            <p>Price</p> : {crud.price}
           
            <button onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
 }

export default CrudDelete
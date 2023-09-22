import "../../App.css";
import axios from "axios";
import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';


function CrudDIsplay() {
    const[cruds, setCruds] = useState([]);

        useEffect( () => {
             async   function getCruds(){
                try{
                    const response = await  axios.get("http://localhost:8080/api/cruds");
                    setCruds(response.data);
                }
                catch(error)
                {
                    console.log("ERROR IN", error)
                }
                
        }
        getCruds();
    },[]
        );

    return(
        <div>
            <table className="table">
                <tr>
                    <th>
                        Products Name
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Update
                    </th>
                    <th>
                        Delete
                    </th>
                    
                </tr>


                {cruds.map(
                    (
                        crud
                    ) =>
                    (
                        <tr key={crud._id}>
                            <td>{crud.productsName}</td>
                            <td>{crud.price}</td>
                            <td>
                                <button>
                                <Link to ={`/cruds/${crud._id}/edit`}>
                                Edit
                                </Link>
                                </button>
                            </td>
                            <td>
                                <button>
                                <Link to ={`/cruds/${crud._id}/delete`}>
                                Delete
                                </Link>
                                </button>
                            </td>

                            </tr>
                    )
                )}
                
            </table>

        </div>
    );
}


export default CrudDIsplay;
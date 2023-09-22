import "../../App.css";
import axios from "axios";
import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';


function AdminDIsplay() {
    const[admins, setAdmins] = useState([]);

        useEffect( () => {
             async   function getAdmins(){
                try{
                    const response = await  axios.get("http://localhost:8080/api/admins");
                    setAdmins(response.data);
                }
                catch(error)
                {
                    console.log("ERROR IN", error)
                }
                
        }
        getAdmins();
    },[]
        );

    return(
        <div>
            <table className="table">
                <tr>
                    <th>
                        AdminName
                    </th>
                    <th>
                         AdminAge
                    </th>
                    <th>
                        Update
                    </th>
                    <th>
                        Delete
                    </th>
                    
                </tr>


                {admins.map(
                    (
                        admin
                    ) =>
                    (
                        <tr key={admin._id}>
                            <td>{admin.AdminName}</td>
                            <td>{admin.AdminAge}</td>
                            <td>
                                <button>
                                <Link to ={`/admins/${admin._id}/edit`}>
                                Edit
                                </Link>
                                </button>
                            </td>
                            <td>
                                <button>
                                <Link to ={`/admins/${admin._id}/delete`}>
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


export default AdminDIsplay;
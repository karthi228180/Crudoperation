import "../../App.css";
import axios from "axios";
import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';


function UserDisplay() {
    const[users, setUsers] = useState([]);

        useEffect( () => {
             async   function getUsers(){
                try{
                    const response = await  axios.get("http://localhost:8080/api/users");
                    setUsers(response.data);
                }
                catch(error)
                {
                    console.log("ERROR IN", error)
                }
                
        }
        getUsers();
    },[]
        );

    return(
        <div>
            <table className="table">
                <tr>
                    <th>
                    Firstname
                    </th>
                    <th>
                    Middlename
                    </th>
                    <th>
                    Lastname
                    </th>
                    <th>
                    Email
                    </th>
                    <th>
                    Mobile
                    </th>
                    <th>
                    Password
                    </th>
                    <th>
                        Update
                    </th>
                    <th>
                        Delete
                    </th>
                    
                </tr>


                {users.map(
                    (
                        user
                    ) =>
                    (
                        <tr key={user._id}>
                            <td>{user.Firstname}</td>
                            <td>{user.Middlename}</td>
                            <td>{user.Lastname}</td>
                            <td>{user.Email}</td>
                            <td>{user.Mobile}</td>
                            <td>{user.Password}</td>
                            <td>
                                <button>
                                <Link to ={`/users/${user._id}/edit`}>
                                Edit
                                </Link>
                                </button>
                            </td>
                            <td>
                                <button>
                                <Link to ={`/users/${user._id}/delete`}>
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


export default UserDisplay;
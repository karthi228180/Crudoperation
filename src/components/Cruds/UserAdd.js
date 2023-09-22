import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// This is a functional component named CrudAdd that takes in props as its parameter.
function UserAdd(props) {
  // Declare and initialize the initial state of the form fields.
  const initialState = {
	Firstname: "",
	Middlename: "",
    Lastname: "",
    Email :"",
    Mobile : "",
    Password: "",
  };
  
  // Use the useState hook to create a state variable called 'crud' and a function to update it called 'setUser'.
  const [user, setUser] = useState(initialState);

  // Use the useNavigate hook from react-router-dom to get access to the navigation object.
  const navigate = useNavigate();

  // This function is called when the form is submitted.
  function handleSubmit(event) {
	event.preventDefault();
	
	// Define an async function called postUser to make an HTTP POST request.
	async function postUser() {
	  try {
		const response = await axios.post("http://localhost:8080/api/users/", user);
		
		// After the POST request is successful, navigate to the details page of the created user record.
		navigate(`/users/${response.data._id}`);
	  } catch (error) {
		console.log("error", error);
		
	  }
	}
	
	// Call the postUser function defined above.
	postUser();
  }

  // This function is called when the value of any input field changes.
  function handleChange(event) {
	// Update the 'user' state variable by spreading the existing values and setting the new value for the changed input field.
	setUser({ ...user, [event.target.name]: event.target.value });
  }

  // This function is called when the cancel button is clicked.
  function handleCancel() {
	// Navigate back to the main User list page.
	navigate("/users");
  }

  // The return statement of the component. It defines the JSX structure of the form.
  return (
	<div>
	  <h1>Login Page</h1>
	  <hr />
	  <form className="crud1" onSubmit={handleSubmit}>
		<label>Firstname</label>
		<input
		  name="Firstname"
		  type="text"
		  value={user.Firstname}
		  onChange={handleChange}
		/>
        <label>Middlename</label>
		<input
		  name="Middlename"
		  type="text"
		  value={user.Middlename}
		  onChange={handleChange}
		/>
        <label>Lastname</label>
		<input
		  name="Lastname"
		  type="text"
		  value={user.Lastname}
		  onChange={handleChange}
		/>
        <label>Email</label>
		<input
		  name="Email"
		  type="text"
		  value={user.Email}
		  onChange={handleChange}
		/>
        <label>Mobile</label>
		<input
		  name="Mobile"
		  type="text"
		  value={user.Mobile}
		  onChange={handleChange}
		/>
        
		<label>Password</label>
		<input
		  name="Password"
		  type="tel"
		  value={user.Password}
		  onChange={handleChange}
		  className="form-control"
		/>
		<div className="btn-group">
		  <input type="submit" value="Submit" className="btn btn-primary" />
		  <button
			type="button"
			onClick={handleCancel}
			className="btn btn-secondary"
		  >
			Cancel
		  </button>
		</div>
	  </form>
	</div>
  );
}

// Export the UserAdd component as the default export of this module.
export default UserAdd;

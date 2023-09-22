import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// This is a functional component named CrudAdd that takes in props as its parameter.
function AdminAdd(props) {
  // Declare and initialize the initial state of the form fields.
  const initialState = {
	AdminName: "",
	AdminAge: "",
  };
  
  // Use the useState hook to create a state variable called 'crud' and a function to update it called 'setCrud'.
  const [admin, setAdmin] = useState(initialState);

  // Use the useNavigate hook from react-router-dom to get access to the navigation object.
  const navigate = useNavigate();

  // This function is called when the form is submitted.
  function handleSubmit(event) {
	event.preventDefault();
	
	// Define an async function called postCrud to make an HTTP POST request.
	async function postAdmin() {
	  try {
		const response = await axios.post("http://localhost:8080/api/admins/", admin);
		
		// After the POST request is successful, navigate to the details page of the created CRUD record.
		navigate(`/admins/${response.data._id}`);
	  } catch (error) {
		console.log("error", error);
		
	  }
	}
	
	// Call the postCrud function defined above.
	postAdmin();
  }

  // This function is called when the value of any input field changes.
  function handleChange(event) {
	// Update the 'crud' state variable by spreading the existing values and setting the new value for the changed input field.
	setAdmin({ ...admin, [event.target.name]: event.target.value });
  }

  // This function is called when the cancel button is clicked.
  function handleCancel() {
	// Navigate back to the main CRUD list page.
	navigate("/admins");
  }

  // The return statement of the component. It defines the JSX structure of the form.
  return (
	<div>
	  <h1>Admins Page</h1>
	  <hr />
	  <form className="crud2" onSubmit={handleSubmit}>
		<label>AdminName</label>
		<input
		  name="AdminName"
		  type="text"
		  value={admin.AdminName}
		  onChange={handleChange}
		/>

		<label>AdminAge</label>
		<input
		  name="AdminAge"
		  type="tel"
		  value={admin.AdminAge}
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

// Export the CrudAdd component as the default export of this module.
export default AdminAdd;

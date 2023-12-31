import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// This is a functional component named CrudAdd that takes in props as its parameter.
function CrudAdd(props) {
  // Declare and initialize the initial state of the form fields.
  const initialState = {
	productsName: "",
	price: "",
  };
  
  // Use the useState hook to create a state variable called 'crud' and a function to update it called 'setCrud'.
  const [crud, setCrud] = useState(initialState);

  // Use the useNavigate hook from react-router-dom to get access to the navigation object.
  const navigate = useNavigate();

  // This function is called when the form is submitted.
  function handleSubmit(event) {
	event.preventDefault();
	
	// Define an async function called postCrud to make an HTTP POST request.
	async function postCrud() {
	  try {
		const response = await axios.post("http://localhost:8080/api/cruds/", crud);
		
		// After the POST request is successful, navigate to the details page of the created CRUD record.
		navigate(`/cruds/${response.data._id}`);
	  } catch (error) {
		console.log("error", error);
		
	  }
	}
	
	// Call the postCrud function defined above.
	postCrud();
  }

  // This function is called when the value of any input field changes.
  function handleChange(event) {
	// Update the 'crud' state variable by spreading the existing values and setting the new value for the changed input field.
	setCrud({ ...crud, [event.target.name]: event.target.value });
  }

  // This function is called when the cancel button is clicked.
  function handleCancel() {
	// Navigate back to the main CRUD list page.
	navigate("/cruds");
  }

  // The return statement of the component. It defines the JSX structure of the form.
  return (
	<div >
	  <h1>Create CRUD</h1>
	  <hr />
	  <form className="crud" onSubmit={handleSubmit}>
		<label>Products Name</label>
		<input
		  name="productsName"
		  type="text"
		  value={crud.productsName}
		  onChange={handleChange}
		/>
		
		<label>Price</label>
		<input
		  name="price"
		  type="tel"
		  value={crud.price}
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
export default CrudAdd;

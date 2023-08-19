import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CrudAdd(props) {
	const initialState = {
		productsName: "",
		price: "",
		
	};
	const [crud, setCrud] = useState(initialState);

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		//if (!crud.productsName || !crud.email) return;
		async function postCrud() {
			try {
				const response = await axios.post("http://localhost:8080/api/cruds/", crud);
				navigate(`/cruds/${response.data._id}`);
			} catch (error) {
				console.log("error", error);
			}
		}
		postCrud();
	}

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/cruds");
	}

	return (
		<div>
			<h1>Create CRUD</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<label>Products Name</label>
					<input
						name="productsName"    // name will define a key value
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

export default CrudAdd;

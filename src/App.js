// Import necessary dependencies
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import required styles and components
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";


import CrudAdd from "./components/Cruds/CrudAdd";
import CrudDIsplay from "./components/Cruds/CrudDIsplay";
import CrudDetails from "./components/Cruds/CrudDetails";
import CrudDelete from "./components/Cruds/CrudDelete";
import CrudUpdate from "./components/Cruds/CrudUpdate";


import UserAdd from "./components/Cruds/UserAdd";
import UserDetails from "./components/Cruds/UserDetails";
import UserDisplay from "./components/Cruds/UserDisplay";
import UserUpdate from "./components/Cruds/UserUpdate";
import UserDelete from "./components/Cruds/UserDelete";

import AdminAdd from "./components/Cruds/AdminAdd";
import AdminDetails from "./components/Cruds/AdminDetails";
import AdminDIsplay from "./components/Cruds/AdminDisplay";
import AdminUpdate from "./components/Cruds/AdminUpdate";
import AdminDelete from "./components/Cruds/AdminDelete";



import Sidebar from "./components/Sidebar";




// App component - the root component of the application
function App() {
	return (
		<div className="App">
			{/* Set up routing with react-router */}
			<Router>
				{/* Render the Navbar component */}
				<Navbar />

				<Routes>
					{/* Define routes for different pages */}
					{/* Exact path "/" and "/api/" render the Home component */}
					<Route exact path="/" element={<Home />} />
					<Route exact path="/api/" element={<Home />} />
					
					
					{/* Path "/cruds/new" renders the CrudAdd component */}
					<Route exact path="/cruds/new" element={<CrudAdd />} />
					<Route exact path="/cruds/read" element={<CrudDIsplay />} />
					<Route exact path="/cruds/:_id/edit" element={<CrudUpdate />} />
					<Route exact path="/cruds/:_id/delete" element={<CrudDelete />} />
					<Route exact path="/cruds/:_id" element={<CrudDetails />} />


					
					<Route exact path="/users/new" element={<UserAdd/>} />
					<Route exact path="/users/:_id" element={<UserDetails/>} />
					<Route exact path="/users/read" element={<UserDisplay/>} />
					<Route exact path="/users/:_id/edit" element={<UserUpdate/>} />
					<Route exact path="/users/:_id/delete" element={<UserDelete/>} />
					



					<Route exact path="/admins/new" element={<AdminAdd/>} />
					<Route exact path="/admins/:_id" element={<AdminDetails/>} />
					<Route exact path="/admins/read" element={<AdminDIsplay/>} />
					<Route exact path="/admins/:_id/edit" element={<AdminUpdate/>}/>
					<Route exact path="/admins/:_id/delete" element={<AdminDelete/>} />



					<Route exact path="/sidebar" element={<Sidebar/>}/>

				</Routes>
			</Router>
		</div>
	);
}

// Export the App component as the default export
export default App;

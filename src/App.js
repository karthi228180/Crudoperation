import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import CrudAdd from "./components/Cruds/CrudAdd";
import CrudDetails from "./components/Cruds/CrudDetails";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/api/" element={<Home />} />
					<Route exact path="/cruds/new" element={<CrudAdd />} />
					<Route exact path="/cruds/:_id" element={<CrudDetails />} />
				</Routes>
		
			</Router>
		</div>
	);
}

export default App;

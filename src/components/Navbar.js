import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
	return (

			<div className="Nav">
					<ul className="Create">
						<li>
							Create crud operation
						</li>
						<li>
							<NavLink
								className="nav-link"
								activeclassname="active"
								to="/cruds/new"    // route http name
							>
								Create
							</NavLink>
							</li>
							<li>
							<NavLink
								className="nav-link"
								activeclassname="active"
								to="/users/new"    // route http name
							>
								User
							</NavLink>
							</li>
							<li>
							<NavLink
								className="nav-link"
								activeclassname="active"
								to="/admins/new"    // route http name
							>
								Admin
							</NavLink>
							</li>
					</ul>
					<ul className="Create">
						<li>
							Read data list
						</li>
						<li>
							<NavLink
								className="nav-link"
								activeclassname="active"
								to="/cruds/read"    // route http name
							>
								Curd
							</NavLink>
							</li>
							<li>
							<NavLink
								className="nav-link"
								activeclassname="active"
								to="/users/read"    // route http name
							>
								User
							</NavLink>
							</li>
							<li>
							<NavLink
								className="nav-link"
								activeclassname="active"
								to="/admins/read"    // route http name
							>
								Admin
							</NavLink>
							</li>
					</ul>

			</div>

	);
};

export default Navbar;

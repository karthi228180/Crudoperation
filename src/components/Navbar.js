import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (

			<div>
					<ul>
						<li>
							<NavLink
								className="nav-link"
								activeclassname="active"
								to="/cruds/new"    // route http name
							>
								Create
							</NavLink>
						</li>
			</ul>

			</div>

	);
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/topics">Topics</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/gallery">Gallery</Link>
			<Link to="/order">Order</Link>
			<Link to="/locations">Locations</Link>
		</nav>
	);
}

export default Navigation;

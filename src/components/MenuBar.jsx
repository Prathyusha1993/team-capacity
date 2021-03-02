import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import logo from "../images/logo.png";

class MenuBar extends Component {
	render() {
		return (
			<div>
				<Nav defaultActiveKey="/home" className="flex-column">
					<Nav.Link href="/home">Active</Nav.Link>
					<Nav.Link eventKey="link-1">Link</Nav.Link>
					<Nav.Link eventKey="link-2">Link</Nav.Link>
					<Nav.Link eventKey="disabled" disabled>
						Disabled
					</Nav.Link>
				</Nav>
			</div>
		);
	}
}

export default MenuBar;

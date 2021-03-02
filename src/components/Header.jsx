import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import logo from "../images/logo.png";

class Header extends Component {
	render() {
		return (
			<div>
                <Navbar bg="dark" style={{backgroundColor: '#131921'}}>
						<Navbar.Brand>
							<img
								src={logo}
								width="70"
								height="70"
								object-fit="cover"
								className="d-inline-block align-top"
								alt=""
							/>
                            {/* Amazon */}
						</Navbar.Brand>
				</Navbar>
			</div>
		);
	}
}

export default Header;

import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";

export default class Example extends React.Component {
    state = {
        location: null
    }
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            location: ""
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    getLocation = () => {

    }

    componentDidMount = () => {

    }

    render() {
        return (
            <div>
                <Navbar color="info" light>
                    <NavbarBrand href="/" className="mr-auto">
                        <strong>BarBack</strong> {this.props.locationName}
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/locations" onClick={this.toggleNavbar}>Bars</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/menu" onClick={this.toggleNavbar}>Drink Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/carts" onClick={this.toggleNavbar}>Cart</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/past-orders" onClick={this.toggleNavbar}>Past Orders</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">Log Out</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

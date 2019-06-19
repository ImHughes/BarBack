import React, { Component } from 'react';
import { Navbar, NavLink, NavItem, Button, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { Link } from "react-router-dom"

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    // handleFieldChange = evt => {
    //     cost  = {}
    // }
    render() {
        return (
            <div>
                <Navbar color="primary" >
                    <Button outline color="dark" size="sm">Back</Button>{'  '}

                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            Drinks
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <NavLink tag={Link} to="/beer">
                                    Beer
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink tag={Link} to="/wine">
                                    Wine
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink tag={Link} to="/cocktail">
                                    Cocktails
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink tag={Link} to="/shot">
                                    Shots
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Button outline color="dark" size="sm">Logout</Button>{'  '}

                </Navbar>

            </div>
        );
    }
}

export default NavBar;

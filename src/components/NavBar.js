import React, { Component } from 'react';
import { Navbar, NavItem, Button, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'

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
                            <DropdownItem>Beer</DropdownItem>
                            <DropdownItem>Wine</DropdownItem>
                            <DropdownItem>Cocktails</DropdownItem>
                            <DropdownItem>Shots</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Button outline color="dark" size="sm">Logout</Button>{'  '}

                </Navbar>

            </div>
        );
    }
}

export default NavBar;

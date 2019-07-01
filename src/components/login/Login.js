import React, { Component } from 'react';
import { Card, Col, Form, FormGroup, Label, CardBody, Button, Input } from 'reactstrap';
import UsersManager from "../../modules/UsersManager"
import { Link } from "react-router-dom";


class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    onLogin = evt => {
        evt.preventDefault();
        // console.log("Login props", this.props)
        console.log("State", this.state)
        let loggedIn = false;
        UsersManager.login(this.state.username, this.state.password).then(allUsers => {
            if (allUsers.length < 1) {
                alert("No user found");
            } else {
                // console.log("All users", allUsers)
                allUsers.forEach(user => {

                    if (
                        this.state.username === user.username &&
                        this.state.password === user.password
                    ) {
                        loggedIn = true;
                    }
                    if (loggedIn === true) {
                        sessionStorage.setItem("User", user.id);
                        sessionStorage.setItem(
                            "userName",
                            `${user.username}`
                        );
                        console.log("Logged in as: " + this.state.username + "| variable loggedIn: " + loggedIn)
                        this.props.history.push("/locations");
                    }
                });
            }

        })
    };

    componentDidMount() {
        sessionStorage.clear()
    }

    render() {
        return (
            < div >
                <br />
                <h1 className="text-center">Welcome!</h1>
                <Col sm="6" md={{ size: 8, offset: 2 }}>
                    <Card>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label>Username:</Label>
                                    <Input
                                        type="text"
                                        required
                                        onChange={this.handleFieldChange}
                                        id="username"
                                        placeholder="Username"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password:</Label>
                                    <Input
                                        type="password"
                                        required
                                        onChange={this.handleFieldChange}
                                        id="password"
                                        placeholder="Password"
                                    />
                                </FormGroup>
                                <div className="d-flex justify-content-around">
                                    <Button color="success" onClick={this.onLogin}>
                                        Login
                                    </Button>
                                    <Button
                                        color="primary"
                                        tag={Link}
                                        to="/register"
                                    >
                                        Register
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                {/* <Card>
                    <CardBody>
                        <InputGroup>


                            <Input placeholder="userName" type="userName" id="username"
                                onChange={this.handelFieldChange}
                                value={this.state.userName} />


                            <Input placeholder="password" type="password" id="password"
                                onChange={this.handelFieldChange}
                                value={this.state.password} />


                        </InputGroup>
                        <Button onClick={this.onLogin}>login</Button>
                    </CardBody>

                </Card> */}

            </div >
        );
    }
}

export default Login;

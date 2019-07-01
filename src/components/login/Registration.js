import React, { Component } from 'react';
import { Card, CardBody, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import UsersManager from "../../modules/UsersManager"

class Registration extends Component {

    state = {
        username: "",
        email: "",
        password: ""

    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    userReg = evt => {
        evt.preventDefault()
        UsersManager.getAll().then(allUsers => {
            let usersArray = allUsers.filter(user => {
                return user.email === this.state.email
            })
            if (usersArray.length > 0) {
                alert("User is already registered with this email")
            } else {
                const newUser = {
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password
                }
                UsersManager.post(newUser)
                this.props.history.push("/Login")
            }

        })
    }


    render() {
        return (
            <div className="container">
                <h3 className="text-center mt-3">Sign Up for BarBack!</h3>
                <Card className="mt-3">
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input
                                    type="text"
                                    required
                                    onChange={this.handleFieldChange}
                                    placeholder="Username"
                                    name="username"
                                    id="username" />
                                <br />
                                <Label>Email</Label>
                                {/* Write Email Validation Function */}
                                <Input
                                    type="email"
                                    required
                                    onChange={this.handleFieldChange}
                                    placeholder="Email"
                                    name="email"
                                    id="email" />
                                <br />
                                <Label>Password</Label>
                                <Input
                                    type="password"
                                    required
                                    onChange={this.handleFieldChange}
                                    placeholder="Password"
                                    name="password"
                                    id="password" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                    <div className="text-center mb-4">
                        <Button onClick={this.userReg} className="btn-success btn-lg">
                            Register
                        </Button>
                        &nbsp;
                        <Button onClick={() => this.props.history.push("/login")} className="btn btn-danger btn-lg">
                            Cancel
                        </Button>
                    </div>
                </Card>


            </div >
        );
    }
}

export default Registration;

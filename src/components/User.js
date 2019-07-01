import React, { Component } from 'react';
import UsersManager from '../modules/UsersManager';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';

class User extends Component {
    render() {
        console.log("made it to Users")
        return (
            <div>
                <section className="user">
                    {this.props.drinks.map((user) =>
                        <div key={user.id} >
                            <Container>
                                <Row>
                                    <Col xs={12}>
                                        <div>
                                            <Card>
                                                <CardTitle>{user.user_name}</CardTitle>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>)}

                </section>
            </div>
        )
    }
}
export default User
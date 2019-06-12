import React, { Component, useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';
import { useSpring, animated as a } from 'react-spring'
import './BarList.css'


class BarList extends Component {


    render() {
        return (

            <div>
                <section className="drinks">
                    {this.props.drinks.map((drink) =>
                        <div className="box">
                            <Container>
                                <Row>
                                    <Col xs={4}>
                                        <div>
                                            <Card key={drink.id}>
                                                <CardTitle>{drink.drinkName}</CardTitle>
                                                <CardSubtitle>{drink.style}</CardSubtitle>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>)}

                </section>
            </div>

        );
    }
}


export default BarList;

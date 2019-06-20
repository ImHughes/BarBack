import React, { Component } from 'react';
import DrinksManager from '../modules/DrinksManager';
import { Link } from "react-router-dom"
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container, Button } from 'reactstrap';
import Cart from "./cart/Cart"

class Beer extends Component {


    render() {
        console.log("made it to beer")
        return (
            <Container className="Beers" xs={12}>
                {this.props.drinks.map((drink) =>
                    <Card key={drink.id} className="mt-3">
                        <CardBody>
                            <CardTitle className="font-weight-bold">{drink.drinkName}</CardTitle>
                            <CardSubtitle>{drink.style}</CardSubtitle>
                            <Button onClick={() => this.props.addToCart(drink.id)}>Add to </Button>
                        </CardBody>
                    </Card>
                )}
                <Button tag={Link} to="/carts">Checkout</Button>
            </Container>
        );
    }
}
export default Beer;


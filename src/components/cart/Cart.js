import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container, Button } from 'reactstrap';
import CartManager from "../../modules/CartManager"


class Cart extends Component {

    state = {
        carts: []
    }

    componentDidMount() {
        CartManager.getAll().then(carts => {
            this.setState({ carts })
        })
    }

    deleteCart = (id) => {
        CartManager.delete(id)
            .then(CartManager.getAll)
            .then((carts) => {
                this.props.carts.push("/carts")
                this.setState({ carts: carts });
            })
    };

    increaseQty = (cartItem) => {
        CartManager.increaseQty(cartItem)
            .then(CartManager.getAll)
            .then((carts) => {
                this.props.carts.push("/carts")
                this.setState({ carts: carts });
            })
    };

    decreaseQty = (cartItem) => {
        CartManager.decreaseQty(cartItem)
            .then(CartManager.getAll)
            .then((carts) => {
                this.props.carts.push("/carts")
                this.setState({ carts: carts });
            })
    };

    render() {
        console.log("cart")
        return (
            <Container className="cart" xs={12}>
                {this.state.carts.map((cartItem) =>
                    <Card key={cartItem.id}>
                        <CardBody>
                            <CardTitle>{cartItem.drink.drinkName}  x ({cartItem.quantity}) </CardTitle>
                            <Button onClick={() => this.increaseQty(cartItem)}>+</Button>
                            &nbsp;
                            <Button onClick={() => this.decreaseQty(cartItem)}>-</Button>
                        </CardBody>

                        <Button onClick={() => this.deleteCart(cartItem.id)}>Delete</Button>
                    </Card>
                )}
            </Container>

        )
    }
}
export default Cart;


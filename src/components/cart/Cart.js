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

    render() {
        console.log("cart")
        return (
            <Container className="cart" xs={12}>
                {this.state.carts.map((cart) =>
                    <Card key={cart.id}>
                        <CardBody>
                            <CardTitle>{cart.drink.drinkName}  x ({cart.quantity}) </CardTitle>
                        </CardBody>

                        <Button onClick={() => this.deleteCart(cart.id)}>Delete</Button>
                    </Card>
                )}
            </Container>

        )
    }
}
export default Cart;


import React, { Component } from 'react';
import { Row, Col, ListGroupItem, Button } from 'reactstrap'
import CartManager from "../modules/CartManager"
// import { FaCartPlus } from 'react-icons/fa'

class Drink extends Component {

    addToCart = (drinkId) => {
        const cartItem = {
            drinkId: drinkId,
            quantity: 1,
            userId: parseInt(sessionStorage.getItem("User")),
            locationId: parseInt(sessionStorage.getItem("locationId"))
        }
        return CartManager.post(cartItem)
    }

    render() {
        // console.log(this.props.drink)

        // let iconClasses = className({
        //     'text-center': true,
        //     'align-middle': true
        // })

        return (
            <ListGroupItem>
                <Row>
                    <Col xs="10">
                        {this.props.drink.drink.drinkName}
                        <br />
                        <small className="text-muted">
                            {this.props.drink.drink.style}
                        </small>
                        <br />
                        ${this.props.drink.drinkPrice}
                    </Col>
                    <Col xs="2" className={["text-center", "my-auto"].join(' ')}>
                        {/* <h4><FaCartPlus /></h4> */}
                        <Button onClick={() => this.addToCart(this.props.drink.drink.id)}>Add to Cart</Button>
                    </Col>
                </Row>
            </ListGroupItem>
        )
    }
}

export default Drink;
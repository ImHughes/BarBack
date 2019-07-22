import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Container, Button, Row } from 'reactstrap';
import LocationsManager from "../../modules/LocationsManager"
import CartManager from "../../modules/CartManager"
import DrinksManager from "../../modules/DrinksManager"
import { Link } from "react-router-dom";

class Cart extends Component {

    state = {
        carts: [],
        total: 0.0,
        locationName: this.props.locationName,
        userId: sessionStorage.getItem("User")

    }

    checkLocation(carts) {
        console.log("check location carts", carts)
        if (sessionStorage.getItem("locationId") === null) {
            // sessionStorage.setItem("locationId", carts[0].locationId)
            console.log("sessionStorage locationId set to", sessionStorage.getItem("locationId"))
        }
    }

    componentDidMount() {
        CartManager.getAllByUser(this.state.userId).then(carts => {
            this.checkLocation(carts)
            this.setState({ carts })
            const total = this.calculateTotal()
            this.setState({ total })
        })
        this.setState({
            locationName: this.props.locationName
        });

    }

    deleteCart = (id) => {
        CartManager.delete(id)

            .then(() => CartManager.getAllByUser(this.state.userId))
            .then((carts) => {
                console.log("this is carts", carts)
                this.setState({ carts: carts }, this.calculateTotal())
                this.props.carts.push("/carts")


            })
    };

    clearCart = evt => {
        console.log("Cart.js - clearCart function")
        CartManager.deleteCart(sessionStorage.getItem("User"))
        this.forceUpdate()
    }

    increaseQty = (cartItem) => {
        CartManager.increaseQty(cartItem)
            .then(() => CartManager.getAllByUser(this.state.userId))
            .then((carts) => {
                this.props.carts.push("/carts")
                this.setState({ carts: carts }, this.calculateTotal())


            })
    };

    decreaseQty = (cartItem) => {
        CartManager.decreaseQty(cartItem)
            .then(() => CartManager.getAllByUser(this.state.userId))
            .then((carts) => {
                this.props.carts.push("/carts")
                this.setState({ carts: carts }, this.calculateTotal())


            })
    };

    calculateTotal = () => {

        let fx_total = 0.0
        let locationId = sessionStorage.getItem("locationId")
        console.log("CalculateTotal locationId is", locationId)

        // Get locationDrinks based on locationId
        DrinksManager.getMenu(locationId).then(menu => {
            // For each menu item
            for (let i = 0; i < menu.length; i++) {

                for (let j = 0; j < this.state.carts.length; j++) {
                    // Match menuItem drinkId to cart drinkId
                    // console.log("menu", menu)
                    if (menu[i].drinkId === this.state.carts[j].drinkId) {
                        console.log("Found match!")
                        fx_total = fx_total + (menu[i].drinkPrice * this.state.carts[j].quantity)
                    }
                }
            }


        }).then(() => {
            console.log("fx_total: ", fx_total)
            this.setState({ total: fx_total })
            console.log("this.state.total: ", this.state.total)
            // this.setState({ total: fx_total })

        }
        )

        // Use cart drinkId to get price from locationDrinks
        // Multiply price with cart quantity
        // Add to total 

    }

    render() {
        // console.log("state", this.state)


        return (

            <div className="container cart" xs={12}>
                <h3 className="text-center mt-3">{this.props.locationName}</h3>
                {this.state.carts.map((cartItem) =>
                    <Card key={cartItem.id} className="mt-3">

                        <CardBody>

                            <CardTitle>{cartItem.drink.drinkName}  x ({cartItem.quantity}) </CardTitle>
                            <Button onClick={() => this.increaseQty(cartItem)}>+</Button>
                            &nbsp;
                            <Button onClick={() => this.decreaseQty(cartItem)}>-</Button>
                            <br /><br />
                            <Button onClick={() => this.deleteCart(cartItem.id)}>Delete</Button>

                        </CardBody>

                    </Card>
                )}
                <div className="text-center mt-3">
                    <div className="mt-3 mb-3">Total: ${this.state.total ? this.state.total.toFixed(2) : null}</div>
                    <Button className="btn-success btn-lg" tag={Link} to="/menu">
                        Submit Order
                    </Button>
                </div>
            </div>

        )
    }
}
export default Cart;


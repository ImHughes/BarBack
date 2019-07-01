import React, { Component } from 'react';

import DrinksManager from "../modules/DrinksManager"
import UsersManager from "../modules/UsersManager"
import LocationsManager from "../modules/LocationsManager"
import CartManager from '../modules/CartManager';

import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Cart from "./cart/Cart"
import Login from "./login/Login"
import Locations from "./Locations/Locations"
import Registration from "./login/Registration"
import Menu from "./Menu"
import NavBar from "./NavBar"

class ApplicationViews extends Component {
    state = {
        locations: [],
        carts: [],
        users: [],
        menu: [],
        drinks: [],
        locationName: ""

    };


    addCart = (drinkTOAdd) => {
        CartManager.getAll()
        this.api()
            .then((drinks) => {
                drinks.indexOf(drink => drink.drink.id === drinkTOAdd.id)
                    .then(() => DrinksManager.getAllDrinks())
                    .then((drinks) =>
                        this.state({
                            drinks: drinks
                        })
                    )
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

    updateDrinks = editedDrinkObject => {
        return DrinksManager.edit(editedDrinkObject)
            .then(() => DrinksManager.getAll())
            .then(drinks => {
                this.setState({
                    drinks: drinks
                });
            });
    }

    addToCart = (drinkId) => {
        const cartItem = { drinkId: drinkId, quantity: 1 }
        return CartManager.post(cartItem)
    }

    updateMenu = (locationId) => {
        const newState = {}
        DrinksManager.getMenu(locationId).then(menu => {
            newState.menu = menu
        }).then(() => this.setState(newState))
    }

    updateLocation = () => {
        const newState = {}
        let locationId = sessionStorage.getItem("locationId")

        LocationsManager.get(locationId).then(location => {
            newState.locationName = location.name
        }).then(() => this.setState(newState))

    }

    componentDidMount() {
        const newState = {}

        let locId = sessionStorage.getItem('locationId')

        DrinksManager.getAll()
            .then(drinks => {
                newState.drinks = drinks
            })

            .then(() => DrinksManager.getMenu(locId)).then(menu => {
                newState.menu = menu
            })

            .then(() => LocationsManager.getAll()).then(locations => {
                newState.locations = locations
            })

            .then(() => UsersManager.getAll()).then(users => {
                newState.users = users
            }).then(() => this.setState(newState))
    }

    render() {
        return (
            <>

                <Route
                    exact
                    path="/menu"
                    render={(props) => {
                        return <Menu {...props}
                            menu={this.state.menu}
                            locationName={this.state.locationName}
                        />
                    }}

                />

                <Route
                    exact
                    path="/carts"
                    render={(props) => {
                        return <Cart {...props}
                            deleteCart={this.deleteCart}
                            carts={this.state.carts}
                            drinks={this.state.drinks}
                            menu={this.state.menu}
                            locationName={this.state.locationName}
                        />
                    }}

                />
                <Route
                    exact
                    path="/login"
                    render={props => {
                        return (
                            < Login
                                {...props}
                                // populateAppState={this.props.populateAppState}
                                login={this.props.login}
                            />
                        );
                    }}
                />

                <Route
                    exact
                    path="/locations"
                    render={props => {
                        return (
                            <Locations
                                {...props}
                                locations={this.state.locations}
                                updateMenu={this.updateMenu}
                                updateLocation={this.updateLocation}
                            />

                        )
                    }}

                />

                <Route
                    exact
                    path="/register"
                    render={props => {
                        return (
                            <Registration
                                {...props}
                                register={this.props.register} />

                        )
                    }}

                />
            </>
        );

    }
}

export default withRouter(ApplicationViews);

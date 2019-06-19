import React, { Component } from 'react';
import DrinksManager from "../modules/DrinksManager"
import UsersManager from "../modules/UsersManager"
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
// import BarList from "./bar/BarList"
import Beer from "./Beer"
import Wine from "./Wine"
import Cocktail from "./Cocktail"
import Shot from "./Shot"
import CartManager from '../modules/CartManager';
import Cart from "./cart/Cart"


class ApplicationViews extends Component {
    state = {
        drinks: [],
        bar: [],
        carts: [],
        beer: [],
        wine: [],
        cocktail: [],
        shot: []
    };
    addCart = (drinks) =>
        DrinksManager.postNewDrinks(drinks)
            .then(() => DrinksManager.getAllDrinks())
            .then((drinks) =>
                this.state({
                    drinks: drinks
                })
            )

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

    componentDidMount() {
        const newState = {}

        DrinksManager.getAll().then(drinks => {
            newState.drinks = drinks
        }).then(() => this.setState(newState))

        DrinksManager.getBeer().then(beer => {
            newState.beer = beer
        }).then(() => this.setState(newState))

        DrinksManager.getWine().then(wine => {
            newState.wine = wine
        }).then(() => this.setState(newState))

        DrinksManager.getCocktail().then(cocktail => {
            newState.cocktail = cocktail
        }).then(() => this.setState(newState))

        DrinksManager.getShots().then(shot => {
            newState.shot = shot
        }).then(() => this.setState(newState))



    }




    render() {
        return (
            <>
                <Route
                    exact
                    path="/beer"
                    render={(props) => {
                        return <Beer addToCart={this.addToCart}{...props} drinks={this.state.beer} />
                    }}
                />
                <Route
                    exact
                    path="/wine"
                    render={(props) => {
                        return <Wine addToCart={this.addToCart}{...props} drinks={this.state.wine} />
                    }}
                />
                <Route
                    exact
                    path="/cocktail"
                    render={(props) => {
                        return <Cocktail addToCart={this.addToCart}{...props} drinks={this.state.cocktail} />
                    }}
                />
                <Route
                    exact
                    path="/shot"
                    render={(props) => {
                        return <Shot addToCart={this.addToCart}{...props} drinks={this.state.shot} />
                    }}
                />
                <Route
                    exact
                    path="/carts"
                    render={(props) => {
                        return <Cart {...props}
                            deleteCart={this.deleteCart}
                            carts={this.state.carts} />
                    }}

                />

            </>
        );

    }
}

export default withRouter(ApplicationViews);

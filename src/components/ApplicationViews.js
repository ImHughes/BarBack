import React, { Component } from 'react';
import DrinksManager from "../modules/DrinksManager"
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import BarList from "./bar/BarList"

class ApplicationViews extends Component {
    state = {
        drinks: [],
        bar: []
    };
    addDrinks = (drinks) =>
        DrinksManager.postNewDrinks(drinks)
            .then(() => DrinksManager.getAllDrinks())
            .then((drinks) =>
                this.state({
                    drinks: drinks
                })
            )

    deleteDrink = (id) => {
        DrinksManager.delete(id)
            .then(DrinksManager.getAll)
            .then((drinks) => {
                this.props.drinks.push("/drinks");
                this.setState({ drinks: drinks });
            });
    }

    updateDrinks = editedDrinkObject => {
        return DrinksManager.edit(editedDrinkObject)
            .then(() => DrinksManager.getAll())
            .then(drinks => {
                this.setState({
                    drinks: drinks
                });
            });
    }
    componentDidMount() {
        const newState = {}
        DrinksManager.getAll().then(drinks => {
            console.log("shotsshots", drinks)
            newState.drinks = drinks
        })
            .then(() => this.setState(newState))
    }





    render() {
        return (
            <React.Fragment>
                <Route exact path="/drinks"
                    render={(props) => {
                        return (
                            <BarList
                                drinks={this.state.drinks}
                                {...props}
                            />
                        )
                    }} />
            </React.Fragment>
        );

    }
}

export default withRouter(ApplicationViews);

import React, { Component } from 'react';
import ApplicationViews from "./ApplicationViews";
import { Route } from "react-router-dom";
import NavBar from "./NavBar"

class BarBack extends Component {

    render() {
        return (
            <Route>
                <>
                    <NavBar />
                    <ApplicationViews />

                </>
            </Route>
        )
    }
}

export default BarBack;

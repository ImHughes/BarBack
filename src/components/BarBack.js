import React, { Component } from 'react';
import ApplicationViews from "./ApplicationViews";
import NavBar from "./NavBar";
import { Route } from "react-router-dom";


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

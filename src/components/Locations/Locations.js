import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Container, Button } from 'reactstrap';

class Locations extends Component {
    state = {
        menu: []
    }

    pickLocation = (locationId) => {
        console.log("Location ID: " + locationId)
        sessionStorage.setItem("locationId", locationId)
        this.props.updateMenu(locationId)
        this.props.updateLocation();
        // Menu is updating after component is rendered leading to incorrect prices
        // How do we ensure renders are called after updates are completed?
        // How to access the functions in application view from a component?

        // this.props.updateMenu(locationId).then(
        //     this.props.history.push("/menu"));

        this.props.history.push("/menu")
    }

    //Set session storage to a var then do fetch call using made var to get data, then set state with response then pass state into


    render() {
        console.log("made it to locations")
        return (
            <Container className="Locations" xs={12}>
                {this.props.locations.map((location) =>
                    <Card className="mt-2" key={location.id}>
                        <CardBody>
                            <CardTitle className="font-weight-bold">
                                {location.name}</CardTitle>
                            <CardTitle className="font-weight-bold">
                                {location.address}
                            </CardTitle>
                            <Button onClick={() => this.pickLocation(location.id)}>Select location</Button>
                        </CardBody>
                    </Card>)}
            </Container>
        );
    }
}

export default Locations;

import React, { Component } from "react";
import Drink from "./Drink";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  ListGroup,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

import classnames from "classnames";

class Menu extends Component {
  constructor(props) {
    super(props);
    console.log("Props", props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  componentDidMount() {
    this.setState({
      menu: this.props.menu,
      locationName: this.props.locationName
    });
  }

  render() {
    // console.log("Menu", this.props.menu);
    // console.log("Drinks List (Master)", this.props.drinksList);

    // map function allows us to loop through props
    // return this.props.menu.map((drink) => (
    //     <Drink drink={this.props.menu} />
    // ));

    // this.props.updateLocation();

    return (
      <div>
        <h3 className="text-center mt-3">{this.props.locationName}</h3>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Beer
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Wine
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Cocktails
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              Shots
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          {/* Beers list */}
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <ListGroup>
                  {this.props.menu
                    .filter(menuItem => menuItem.drink.drinkTypeId === 1)
                    .map(menuItem => (
                      <Drink key={menuItem.id} drink={menuItem} />
                    ))}
                </ListGroup>
              </Col>
            </Row>
          </TabPane>
          {/* Wines list */}
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <ListGroup>
                  {this.props.menu
                    .filter(menuItem => menuItem.drink.drinkTypeId === 2)
                    .map(menuItem => (
                      <Drink key={menuItem.id} drink={menuItem} />
                    ))}
                </ListGroup>
              </Col>
            </Row>
          </TabPane>
          {/* Cocktails list */}
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <ListGroup>
                  {this.props.menu
                    .filter(menuItem => menuItem.drink.drinkTypeId === 3)
                    .map(menuItem => (
                      <Drink key={menuItem.id} drink={menuItem} />
                    ))}
                </ListGroup>
              </Col>
            </Row>
          </TabPane>
          {/* Shots list */}
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <ListGroup>
                  {this.props.menu
                    .filter(menuItem => menuItem.drink.drinkTypeId === 4)
                    .map(menuItem => (
                      <Drink key={menuItem.id} drink={menuItem} />
                    ))}
                </ListGroup>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        <div className="text-center mt-3">
          <Button className="btn-success btn-lg" tag={Link} to="/carts">
            View Cart
          </Button>
        </div>
      </div>
    );
  }
}

export default Menu;

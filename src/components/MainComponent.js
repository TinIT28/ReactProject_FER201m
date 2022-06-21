import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Routes, Route, Navigate } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menu"
            element={ <Menu dishes={this.state.dishes} />}
          />
          
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;

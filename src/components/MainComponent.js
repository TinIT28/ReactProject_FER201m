import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { Routes, Route, Navigate } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
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
          <Route
            path="/home"
            element={
              <Home
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={
                  this.state.promotions.filter((promo) => promo.featured)[0]
                }
                leader={
                  this.state.leaders.filter((leader) => leader.featured)[0]
                }
              />
            }
          />
          <Route path="/menu" element={<Menu dishes={this.state.dishes} />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;

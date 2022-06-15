import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";


class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComments(dish) {
    if (dish != null)
      return (
        <Card>
          <h3>Comments</h3>
          <div className="bg-[#f1eaea] text-[#89c3e4] p-2 h-[540px] leading-relaxed">
            {dish.comments.map((item) => {
              var date = new Date(item.date);
              return (
                <div key={item.id} className="font-semibold text-left mb-5">
                  <CardText>{item.comment}</CardText>
                  <span>
                    By: <strong>{item.author}</strong>, {date.toDateString()}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>
      );
    else return <div></div>;
  }
  

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
          <div className="col col-md">
           {this.renderComments(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
  
}

export default DishDetail;

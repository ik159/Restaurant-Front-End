import React, { Component } from 'react';
import MenuComponent from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import DishDetail from './DishdetailComponent';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent';
import { Switch, Redirect, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

export class Main extends Component {


  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };

  }



  render() {

    const HomePage = () => {
      return (
        <HomeComponent
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }
 


    const DishWithId = ({match}) => {
        return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishID,10))[0]} 
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishID,10))}
          />
        );
    }

    return (
      <div className="App">
        <HeaderComponent />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <MenuComponent dishes={this.state.dishes} />} />
          <Route path='/menu/:dishID' component={DishWithId} />
          <Route path='/contactus' component={Contact} />
          <Route path='/aboutus' component={() => <About leaders={this.state.leaders}/>} />
          <Redirect to='/home' />
        </Switch>
        <FooterComponent />
      </div>
    )
  }
}

export default Main

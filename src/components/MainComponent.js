import React, { Component } from 'react';
import MenuComponent from './MenuComponent';
import DishDetail from './DishdetailComponent';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent';
import { Switch, Redirect, Route ,withRouter } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {  connect } from 'react-redux';






const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

export class Main extends Component {


  constructor(props) {
    super(props);
    

  }



  render() {

    const HomePage = () => {
      return (
        <HomeComponent
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }
 


    const DishWithId = ({match}) => {
        return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishID,10))[0]} 
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishID,10))}
          />
        );
    }

    return (
      <div className="App">
        <HeaderComponent />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <MenuComponent dishes={this.props.dishes} />} />
          <Route path='/menu/:dishID' component={DishWithId} />
          <Route path='/contactus' component={Contact} />
          <Route path='/aboutus' component={() => <About leaders={this.props.leaders}/>} />
          <Redirect to='/home' />
        </Switch>
        <FooterComponent />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(Main));

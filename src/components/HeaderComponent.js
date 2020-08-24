import React, { Component } from 'react'
import { Navbar, Nav ,NavbarBrand, Jumbotron, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


export class HeaderComponent extends Component {

  constructor(props) {
      super(props)
  
      this.state = {
           isNavOpen:false
      }
      this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
      this.setState({
          isNavOpen: !this.state.isNavOpen,
      })
  }
  

    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src='assets/images/logo.png' height="30" width="41" alt="Ristorante" />
                        </NavbarBrand>
                            <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink to="/home" className="nav-link">
                                        <span className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                    
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/aboutus" className="nav-link">
                                        <span className="fa fa-info fa-lg" /> About Us
                                    </NavLink>
                                    
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/menu" className="nav-link">
                                        <span className="fa fa-list fa-lg" /> Menu
                                    </NavLink>
                                    
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/contactus" className="nav-link">
                                        <span className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                    
                                </NavItem>
                            </Nav>
                            </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
}

export default HeaderComponent
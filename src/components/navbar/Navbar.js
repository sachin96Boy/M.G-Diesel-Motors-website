import React, { Component } from "react";
import Menuitems from "./Menuitems";
import Button from '../Button'

import "./Navbar.css";

import AppleIcon from "@material-ui/icons/Apple";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
      this.setState({
          clicked:!this.state.clicked,
      })
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbar-logo">
          M.G Diesel Motors <AppleIcon style={{marginLeft:0.5}&&{fontSize:24}}/>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          {this.state.clicked ? <CloseIcon style={{color:'red'}}/> : <MenuIcon style={{color:'white'}}/>}
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign-UP</Button>
      </nav>
    );
  }
}

export default Navbar;

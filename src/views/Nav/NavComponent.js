import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";
class NavComponent extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/todo">Todos</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/user">Users</NavLink>
      </div>
    );
  }
}

export default NavComponent;

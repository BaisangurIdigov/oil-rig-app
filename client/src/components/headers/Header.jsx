import React from "react";
import { NavLink } from "react-router-dom";
import { Paper } from "@material-ui/core";

function Header(props) {
  return (
    <Paper>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <div className="header">
            <NavLink
              className="menuItem"
              exact
              to="/"
              activeClassName="selected"
            >
              Главная
            </NavLink>
            <NavLink
              className="menuItem"
              exact
              to="/admin"
              activeClassName="selected"
            >
              Админка
            </NavLink>
            <NavLink
              className="menuItem"
              exact
              to="/about_us"
              activeClassName="selected"
            >
              О нас
            </NavLink>
          </div>
        </div>
      </nav>
    </Paper>
  );
}

export default Header;

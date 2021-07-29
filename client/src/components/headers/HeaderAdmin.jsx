import React from "react";
import { NavLink } from "react-router-dom";
import { Paper } from "@material-ui/core";

function HeaderAdmin(props) {
  return (
    <Paper>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <h1 className="navbar-brand">Navbar</h1>
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
              to="/status"
              activeClassName="selected"
            >
              Статус
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

export default HeaderAdmin;

import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Paper } from '@material-ui/core';
import Search from '../body/Search';

function HeaderAdmin({setInput}) {
  return (
    <Paper>
      <nav className="navbar navbar-light bg-light">
        <Box className="container-fluid">
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
            <Search setInput={setInput} />
          </Box>
      </nav>
    </Paper>
  );
}

export default HeaderAdmin;

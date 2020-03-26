import React from 'react';
import {NavLink} from 'react-router-dom';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { navBarStyles } from './NavBar.style';
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu"

export function NavBar() {
  const classes = navBarStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar className={classes.toolbar}>
          {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
          {/*  <MenuIcon />*/}
          {/*</IconButton>*/}
          <Typography variant="h6" className={classes.title}>
            TO DO
          </Typography>
          <div className={classes.menuButtons}>
            <Button color="inherit" to='/' component={NavLink}>To Do</Button>
            <Button color="inherit" to='/report' component={NavLink}>Report</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

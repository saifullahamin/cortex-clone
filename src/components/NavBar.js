import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: "auto",
  },
  switchBtn: {
    marginLeft: "auto",
    textTransform: "none",
    fontSize: 18,
    "&:hover": {
      background: "none",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    }
  },
  appBar: {
    backgroundImage:
      "linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%);",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Button
            className={classes.switchBtn}
            color="inherit"
            disableRipple={true}
          >
            Switch experience <ArrowDropDownIcon />
          </Button>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

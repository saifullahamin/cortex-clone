/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    background: "linear-gradient(to right, #860091, #662070);",

    paddingTop: 70,
    paddingBottom: 70,
    fontWeight: 200,
    color: "white",

    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
      paddingBottom: 50,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 30,
      paddingBottom: 30,
    },
  },
  name: {
    fontSize: 20,
    textDecoration: "none",
    borderBottom: "1px white solid",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  head: {
    fontWeight: 100,
    fontSize: 45,
    fontFamily: "Dancing Script, cursive",
    [theme.breakpoints.down("sm")]: {
      fontSize: 35,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <h1 className={classes.head}>Made With ❤️ By!</h1>
        <a
          href="https://github.com/saifullahamin"
          target="_blank"
          className={classes.name}
        >
          Saifullah Amin {<GitHubIcon />}
        </a>
      </footer>
      <div></div>
    </div>
  );
};

export default Footer;

/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    background: "linear-gradient(to right, #860091, #662975);",
    paddingTop: 80,
    paddingBottom: 80,
    fontWeight: 200,
    color: "white",
  },
  name: {
    fontSize: 20,
    textDecoration: "none",
    borderBottom: "1px white solid",
    color: "white",
  },
  head: {
    fontWeight: 100,
    fontSize: 45,
    fontFamily: "Dancing Script, cursive",
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
    </div>
  );
};

export default Footer;

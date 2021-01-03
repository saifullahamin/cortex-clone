import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import img1 from "../images/img1.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // maxWidth: "100%",
    backgroundColor: "grey",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      background:
        "linear-gradient(120deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%);",
    },
    [theme.breakpoints.down("sm")]: {
      background:
        "linear-gradient(20deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%);",
    },
  },
  grid1: {
    display: "flex",

    [theme.breakpoints.up("sm")]: {
      paddingTop: 100,
      justifyContent: "flex-end",
    },

    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      justifyContent: "center",
    },
  },
  grid2: {
    display: "flex",

    [theme.breakpoints.up("sm")]: {
      paddingTop: 100,
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
      justifyContent: "center",
    },
  },
  heading1: {
    fontSize: 80,
    fontWeight: 400,
    marginBottom: 0,
  },
  heading2: {
    fontSize: 48,
    fontWeight: 300,
    marginTop: 0,
    marginBottom: 0,
  },
  p1: {
    fontSize: 25,
    fontWeight: 200,
  },
  image: {
    [theme.breakpoints.up("md")]: {
      height: 500,
    },
    [theme.breakpoints.down("md")]: {
      height: 350,
    },
  },
  div1: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: 500,
      padding: 50,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      maxWidth: 450,
      // paddingBottom: 30,
      padding: 10,
    },
  },
  parentGrid: {
    // maxWidth: "100%",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="row-reverse"
        className={classes.parentGrid}
      >
        <Grid item xs={12} sm={12} md={6} className={classes.grid2}>
          <div className={classes.div2}>
            <img src={img1} alt="d" className={classes.image} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.grid1}>
          <div className={classes.div1}>
            <h1 className={classes.heading1}>CORTEX</h1>
            <h2 className={classes.heading2}>COPYWRITER</h2>
            <p className={classes.p1}>
              Enhance your communications with psychology-based copywriting and
              UX writing
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

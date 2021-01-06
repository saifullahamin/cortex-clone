import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import img1 from "../images/img1.svg";
import img2 from "../images/img2.svg";
import img3 from "../images/img3.svg";
import Typography from "@material-ui/core/Typography";
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
      paddingTop: 50,
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
      paddingTop: 20,
      justifyContent: "center",
    },
  },
  heading1: {
    fontSize: 100,
    fontWeight: 400,
    marginBottom: 0,
    marginTop: 0,
    width: "100%",
  },
  heading2: {
    fontSize: 60,
    fontWeight: 300,
    marginTop: -25,
    marginBottom: 0,
    width: "100%",
  },
  p1: {
    [theme.breakpoints.up("sm")]: {
      fontSize: 25,
      fontWeight: 200,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      fontWeight: 200,
    },
  },
  div2: {
    position: "relative",
    width: "100%",

    [theme.breakpoints.up("md")]: {
      height: 500,
    },
    [theme.breakpoints.down("md")]: {
      height: 400,
    },
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
  },
  image: {
    [theme.breakpoints.up("md")]: {
      height: 500,
    },
    [theme.breakpoints.down("md")]: {
      height: 400,
    },
    [theme.breakpoints.down("sm")]: {
      height: 300,
      width: "100%",
    },
    position: "absolute",
    zIndex: 1,
  },
  image2: {
    [theme.breakpoints.up("md")]: {
      height: 500,
    },
    [theme.breakpoints.down("md")]: {
      height: 400,
    },
    [theme.breakpoints.down("sm")]: {
      height: 300,
      width: "100%",
    },
    position: "absolute",
    zIndex: 2,
    opacity: 0,
  },
  image3: {
    [theme.breakpoints.up("md")]: {
      height: 500,
    },
    [theme.breakpoints.down("md")]: {
      height: 400,
    },
    [theme.breakpoints.down("sm")]: {
      height: 300,
      width: "100%",
    },
    position: "absolute",
    zIndex: 3,
  },
  div1: {
    [theme.breakpoints.up("md")]: {
      maxWidth: 500,
      padding: 50,
      marginBottom: 250,
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 500,
      padding: 50,
      marginBottom: 100,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: 10,
      width: "90%",
    },
  },

  button: {
    padding: "0.8rem 1.5rem",
    borderRadius: "40px",
    backgroundImage: "linear-gradient(to top,#1b5dbf,#23ffdb)",
    maxWidth: 130,
    marginTop: 100,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0px 5px 10px 2px rgba(82, 82, 82, 0.75)",
    },
  },
  message: {
    textTransform: "none",
    fontWeight: 200,
    fontSize: 16,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const brainRef = useRef(null);
  const lightRef = useRef(null);
  useWebAnimations({
    ref: brainRef,
    keyframes: [
      { transform: "translateY(0px)" },
      { transform: "translateY(-40px)" },
      { transform: "translateY(0px)" },
    ],
    timing: {
      //   delay: 500,
      duration: 6000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });
  useWebAnimations({
    ref: lightRef,
    keyframes: [
      {
        opacity: 0,
      },
      {
        opacity: 0,
      },
      {
        opacity: 0.1,
      },
      {
        opacity: 0,
      },
      {
        opacity: 0,
      },
      {
        opacity: 0,
      },
      {
        opacity: 0.3,
      },
      {
        opacity: 0,
      },
      {
        opacity: 0.5,
      },
    ],
    timing: {
      duration: 500,
      iterations: Infinity,
    },
  });

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
            <img ref={brainRef} src={img3} alt="d" className={classes.image3} />
            <img ref={lightRef} src={img2} alt="d" className={classes.image2} />
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
            <div className={classes.button}>
              <Typography variant="button" className={classes.message}>
                Send a message
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

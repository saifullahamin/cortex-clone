import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import r1 from "../images/review1.svg";
import r2 from "../images/review2.svg";
import r3 from "../images/review3.svg";
import r4 from "../images/review4.svg";
import r5 from "../images/review5.svg";
import r6 from "../images/review6.svg";
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(to right, #570091, #7522b6);",
    paddingTop: 100,
    paddingBottom: 100,
  },
  gridX: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "flex-end",
      width: "min-content",
      padding: "10px",
      paddingLeft: 30,
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      // width: "min-content",
      padding: "10px",
    },
  },
  gridY: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "flex-start",
      padding: "10px",
      paddingRight: 30,
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      padding: "10px",
    },
  },
  main: {
    display: "flex",
    justifyContent: "flex-start",
    transition: "0.5s ease-out",
    boxShadow: "1px 16px 20px rgba(0, 0, 0, 0.17)",
    "&:hover": {
      transform: "scale(1.02)",
      cursor: "pointer",
    },
    [theme.breakpoints.up("sm")]: {
      width: 500,
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  images: {
    [theme.breakpoints.up("md")]: {
      width: 250,
      backgroundColor: "rgb(153, 102, 255)",
      display: "flex",
    },
    [theme.breakpoints.down("md")]: {
      width: 250,
      backgroundColor: "rgb(153, 102, 255)",
      display: "flex",
    },
  },
  img: {
    width: "100%",
    margin: "auto",
    transform: "scale(0.9)",
  },
  text: {
    width: "70%",
    backgroundColor: "rgb(242, 242, 242)",
    padding: "10px 10px 30px 30px",
  },
  name: {
    fontSize: 19,
    fontWeight: 300,
    marginBottom: 0,
  },
  desig: {
    fontSize: 13,
    fontWeight: 100,
    fontStyle: "italic",
    marginTop: 0,
  },
  lines: {
    [theme.breakpoints.up("md")]: {
      fontSize: 25,
      fontStyle: "italic",
      fontWeight: 100,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      fontStyle: "italic",
      fontWeight: 100,
    },
  },
  reviews: {
    color: "white",
    fontSize: 32,
    fontWeight: 200,
    background: "rgba(0,0,0,0.1)",
    width: 180,
    margin: "auto",
    textAlign: "center",
    boxShadow: "1px 16px 20px rgba(0, 0, 0, 0.17)",
    borderRadius: 5,
    marginBottom: 70,
    paddingTop: 7,
    paddingBottom: 7,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const ref1 = useRef(null);
  let ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  useWebAnimations({
    ref: ref1,
    keyframes: [
      { transform: "scale(1)" },
      { transform: "scale(0.98)" },
      { transform: "scale(1)" },
    ],
    timing: {
      duration: 1000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });
  useWebAnimations({
    ref: ref2,
    keyframes: [
      { transform: "scale(1)" },
      { transform: "scale(0.98)" },
      { transform: "scale(1)" },
    ],
    timing: {
      duration: 1000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });
  useWebAnimations({
    ref: ref3,
    keyframes: [
      { transform: "scale(1)" },
      { transform: "scale(0.98)" },
      { transform: "scale(1)" },
    ],
    timing: {
      duration: 1000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });
  useWebAnimations({
    ref: ref4,
    keyframes: [
      { transform: "scale(1)" },
      { transform: "scale(0.98)" },
      { transform: "scale(1)" },
    ],
    timing: {
      duration: 1000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });
  useWebAnimations({
    ref: ref5,
    keyframes: [
      { transform: "scale(1)" },
      { transform: "scale(0.98)" },
      { transform: "scale(1)" },
    ],
    timing: {
      duration: 1000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });

  useWebAnimations({
    ref: ref6,
    keyframes: [
      { transform: "scale(1)" },
      { transform: "scale(0.98)" },
      { transform: "scale(1)" },
    ],
    timing: {
      duration: 1000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });
  return (
    <div className={classes.root}>
      <div className={classes.reviews}>Reviews</div>
      <Grid container spacing={0} className={classes.grid}>
        <Grid item xs={12} md={6} className={classes.gridX}>
          <div className={classes.main}>
            <div className={classes.images}>
              <img ref={ref1} src={r1} alt="review" className={classes.img} />
            </div>
            <div className={classes.text}>
              <p className={classes.name}> Karl Van Lieshout</p>
              <p className={classes.desig}>Owner & Operator – Ausbeds</p>
              <div className={classes.lines}>
                <div style={{ marginTop: 15 }}>"..innovative"</div>
                <div style={{ marginTop: 15 }}>"..seamless UX"</div>
                <div style={{ marginTop: 15 }}>"..more online sales"</div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.gridY}>
          <div className={classes.main}>
            <div className={classes.images}>
              <img ref={ref2} src={r2} alt="review" className={classes.img} />
            </div>
            <div className={classes.text}>
              <p className={classes.name}>Rosawin Siri</p>
              <p className={classes.desig}>
                Digital Marketing Manager – 4mation Technologies
              </p>
              <div className={classes.lines}>
                <div style={{ marginTop: 15 }}>"..flexible"</div>
                <div style={{ marginTop: 15 }}>"..nailed voice & tone"</div>
                <div style={{ marginTop: 15 }}>"..keep on retainer"</div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.gridX}>
          <div className={classes.main}>
            <div className={classes.images}>
              <img ref={ref3} src={r3} alt="review" className={classes.img} />
            </div>
            <div className={classes.text}>
              <p className={classes.name}>Craig Erskine-Smith</p>
              <p className={classes.desig}>CEO – Erskine Oral Care</p>
              <div className={classes.lines}>
                <div style={{ marginTop: 15 }}>"..wonderful ideas"</div>
                <div style={{ marginTop: 15 }}>"..perfect tagline"</div>
                <div style={{ marginTop: 15 }}>"..excellent wireframes"</div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.gridY}>
          <div className={classes.main}>
            <div className={classes.images}>
              <img ref={ref4} src={r4} alt="review" className={classes.img} />
            </div>
            <div className={classes.text}>
              <p className={classes.name}>Liam Key</p>
              <p className={classes.desig}>
                Creative Director – Imagination Pioneers Studios
              </p>
              <div className={classes.lines}>
                <div style={{ marginTop: 15 }}>"..love his passion"</div>
                <div style={{ marginTop: 15 }}>"..heaps of depth"</div>
                <div style={{ marginTop: 15 }}>"..speaks to my brand"</div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.gridX}>
          <div className={classes.main}>
            <div className={classes.images}>
              <img ref={ref5} src={r5} alt="review" className={classes.img} />
            </div>
            <div className={classes.text}>
              <p className={classes.name}>Eoin Mullins</p>
              <p className={classes.desig}>Director – Corbel Technologies</p>
              <div className={classes.lines}>
                <div style={{ marginTop: 15 }}>"..beautiful copy"</div>
                <div style={{ marginTop: 15 }}>"..psychology edge"</div>
                <div style={{ marginTop: 15 }}>"..emotional currents"</div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.gridY}>
          <div className={classes.main}>
            <div className={classes.images}>
              <img ref={ref6} src={r6} alt="review" className={classes.img} />
            </div>
            <div className={classes.text}>
              <p className={classes.name}> Adrian Rodriguez Soto</p>
              <p className={classes.desig}>eCommerce Manager – EUX Agency</p>
              <div className={classes.lines}>
                <div style={{ marginTop: 15 }}>"..superior intellect"</div>
                <div style={{ marginTop: 15 }}>"..deep psychology"</div>
                <div style={{ marginTop: 15 }}>"..doubled conversions"</div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

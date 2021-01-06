import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import services1 from "../images/services1.svg";
import services2 from "../images/services2.svg";
import services3 from "../images/services3.svg";
import { fadeIn } from "@wellyshen/use-web-animations";
import useWebAnimations from "@wellyshen/use-web-animations";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:
      "linear-gradient(30deg,rgba(206,2,189,1) 0%,   rgba(75,6,193,1) 100%);",
    color: "white",
    [theme.breakpoints.down("md")]: {
      paddingBottom: 50,
    },
  },
  text: {
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
  },
  img: {
    margin: "auto",
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },

  gridLeft: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "100px 50px",

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      justifyContent: "center",
      padding: 0,
      marginTop: 50,
    },
  },
  gridRight: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "100px 50px",

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      justifyContent: "center",
      padding: 0,
      marginTop: 50,
    },
  },
  hg1: {
    fontSize: 55,
    fontWeight: 400,
    [theme.breakpoints.down("xs")]: {
      fontSize: 35,
      marginTop: -15,
    },
  },
  para: {
    fontSize: 20,
    fontWeight: 200,

    [theme.breakpoints.down("xs")]: {
      fontSize: 15.5,
      fontWeight: 100,
    },
  },
  listItem: {
    fontSize: 16,
    fontWeight: 200,
    float: "left",
    paddingTop: "25px",
    paddingRight: "50px",

    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      padding: 2,
      textAlign: "left",
    },
  },
  list: {
    [theme.breakpoints.down("xs")]: {
      display: "inline-grid",
      marginTop: -7,
    },
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const InRef1 = useRef(null);
  const InRef2 = useRef(null);
  const InRef3 = useRef(null);

  useWebAnimations({ ref: InRef1, ...fadeIn });
  useWebAnimations({ ref: InRef2, ...fadeIn });
  useWebAnimations({ ref: InRef3, ...fadeIn });

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={6} className={classes.gridLeft}>
          <div className={classes.img}>
            <Fade left>
              <img src={services1} alt="services" />
            </Fade>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} className={classes.gridRight}>
          <div className={classes.text}>
            <h1 className={classes.hg1}>UX Writing</h1>
            <p className={classes.para}>
              I develop clear and useful text in product interfaces to help
              users reach a specific goal, whether that's completing a form or
              tapping a button. This includes every type of content from
              on-screen help systems, user onboarding and in-app messages to
              push notifications and tooltips.
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>Microcopy</li>
              <li className={classes.listItem}>Taxonomy & Labeling</li>
              <li className={classes.listItem}>Chatbots</li>
              <li className={classes.listItem}>User Research</li>
              <li className={classes.listItem}>Content Style Guide</li>
              <li className={classes.listItem}>User Testing</li>
              <li className={classes.listItem}>Design Principles</li>
              <li className={classes.listItem}>Prototype</li>
            </ul>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={0} direction="row-reverse">
        <Grid item xs={12} sm={12} md={12} lg={6} className={classes.gridRight}>
          <div className={classes.img}>
            <Fade right>
              <img src={services2} alt="services" />
            </Fade>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} className={classes.gridLeft}>
          <div className={classes.text}>
            <h1 className={classes.hg1}>Website Copywriting</h1>
            <p className={classes.para}>
              Your website is a dialogue with your audience. I capture the
              essence of your business and communicate it clearly. Carefully
              considered writing and SEO best practices allow me to craft the
              perfect user journey online. Let me draw the map that guides users
              every step of the way from discovery, to consideration, to
              conversion.
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>Information Architecture</li>
              <li className={classes.listItem}>Wireframes</li>
              <li className={classes.listItem}>Competitor Analysis</li>
              <li className={classes.listItem}>On-page SEO</li>
              <li className={classes.listItem}>Off-page SEO</li>
              <li className={classes.listItem}>USP/UVP</li>
              <li className={classes.listItem}>Landing Page</li>
              <li className={classes.listItem}>Sales Letter</li>
            </ul>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={6} className={classes.gridLeft}>
          <div className={classes.img}>
            <Fade left>
              <img src={services3} alt="services" />
            </Fade>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} className={classes.gridRight}>
          <div className={classes.text}>
            <h1 className={classes.hg1}>Content Writing</h1>
            <p className={classes.para}>
              Give your business a competitive edge with powerful content that
              can be targeted to any segment of your audience. No matter how
              large or complex your project, my custom-built solutions including
              articles, eDMs, and case studies will help you implement a plan
              that maximizes your business’s online exposure.
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}> Headlines & Taglines</li>
              <li className={classes.listItem}>Content Strategy</li>
              <li className={classes.listItem}>Blogs & Articles</li>
              <li className={classes.listItem}>Social Media Content</li>
              <li className={classes.listItem}>Video Scripts</li>
              <li className={classes.listItem}>eDMs & Newsletters</li>
              <li className={classes.listItem}>Case Studies</li>
              <li className={classes.listItem}>Whitepapers</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

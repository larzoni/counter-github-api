import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import divider from "../assets/divider.svg";

//custom style object using JSS
const useStyles = createUseStyles((theme) => ({
  header: {
    fontFamily: theme.fonts.header,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colorIncHover,
    height: "1rem",
    marginBottom: "-20px",
  },
  divider: {
    width: "100%",
    marginBottom: "-20px",
    backgroundColor: theme.colorIncHover,
  },
  title: {
    position: "absolute",
    color: "white",
    fontSize: "5rem",
    textAlign: "center",
    marginTop: "15rem",
    //neon
    textShadow:
      "0 0 42px #f09," +
      "0 0 82px #f09," +
      "0 0 92px #f09a," +
      "0 0 102px #f09," +
      "0 0 151px #f09",
    // Apply the flicker animation to the title text
    animation: "$pulsate 0.11s ease-in-out infinite alternate",
    transition: "1s",
    "@media (max-width: 850px)": {
      fontSize: "2.4rem",
      marginTop: "8rem",
    },
  },
  "@keyframes pulsate": {
    "0%": {
      textShadow:
        "0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff, 0 0 38px #f09, 0 0 73px #f09, 0 0 80px #f09, 0 0 94px #f09, 0 0 140px #f09",
    },
    "100%": {
      textShadow:
        "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #f09, 0 0 80px #f09, 0 0 90px #f09, 0 0 100px #f09, 0 0 150px #f09",
    },
  },
}));

//Component function
const Header = (props) => {
  //styling
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });
  return (
    <>
      <section className={classes.header}>
        <h1 className={classes.title}>Great GitHub Repos</h1>
      </section>
      <img src={divider} className={classes.divider} alt="Divider" />
    </>
  );
};
export default Header;

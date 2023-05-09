import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { AiOutlineMinus } from "react-icons/ai";

//custom style object using JSS
const useStyles = createUseStyles((theme) => ({
  decrementButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colorDec,
    color: "black",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    padding: "1.2rem 3rem 1rem 1.8rem",
    borderRadius: 9999,
    border: "none",
    boxShadow: "inset 0 0 0 1.5px black",
    cursor: "pointer",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: theme.colorDecHover,
      color: "white",
    },
    "@media (max-width: 375px)": {
      marginBottom: "1rem",
    },
  },
  icon: {
    marginRight: "0.2rem",
  },
}));
//Component function
const DecrementButton = (props) => {
  //styling
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });
  return (
    <button className={classes.decrementButton} onClick={props.onClick}>
      <AiOutlineMinus className={classes.icon} /> Decrement
      {props.children}
    </button>
  );
};
export default DecrementButton;

import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { AiOutlinePlus } from "react-icons/ai";

//custom style object using JSS
const useStyles = createUseStyles((theme) => ({
  incrementButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colorInc,
    color: "white",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    padding: "1.2rem 3rem 1rem 1.8rem",
    borderRadius: 9999,
    border: "none",
    cursor: "pointer",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: theme.colorIncHover,
    },
    "@media (max-width: 375px)": {
      marginTop: "1rem",
    },
  },
  icon: {
    marginRight: "0.5rem",
  },
}));

//Component function
const IncrementButton = (props) => {
  //styling
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });
  return (
    <button className={classes.incrementButton} onClick={props.onClick}>
      <AiOutlinePlus className={classes.icon} /> Increment
      {props.children}
    </button>
  );
};
export default IncrementButton;

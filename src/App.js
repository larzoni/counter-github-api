import React, { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import Header from "./components/Header";
import DecrementButton from "./components/DecrementButton";
import IncrementButton from "./components/IncrementButton";
import CurrentRepository from "./components/CurrentRepository";
import { REPOSITORIES } from "./data/repositoryEndpoints";

// Here we define the styles using JSS
const useStyles = createUseStyles((theme) => ({
  // Styles for the entire App
  App: {
    marginTop: 0,
    height: "100vh",
    background: theme.background,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // Styles for the counter section of the App
  counterWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
    width: "95%",
    marginTop: 40,
    borderRadius: 30,
    overflow: "hidden",
    backdropFilter: "grayscale(0.3) brightness(1.4) blur(10px)",
    boxShadow:
      "0 0 20px rgba(26, 26, 26, 0.1), 0 0 40px rgba(26, 26, 26, 0.1), 0 0 80px rgba(26, 26, 26, 0.1)",
    "@media (max-width: 414px)": {
      flexDirection: "column",
      height: "auto",
      padding: "2rem",
      justifyContent: "space-evenly",
    },
  },

  // Styles for the counter text in the counter section
  counterText: {
    margin: "0rem 1.4rem",
    fontSize: "1.5rem",
  },
}));

function App() {
  // Using the JSS styles
  const theme = useTheme();
  const classes = useStyles(theme);

  // Applying counter state and functionality
  const [counter, setCounter] = useState(0);
  const handleDecrement = () => {
    setCounter((prevCounter) =>
      prevCounter === 0 ? REPOSITORIES.length - 1 : prevCounter - 1
    );
  };
  const handleIncrement = () => {
    setCounter((prevCounter) =>
      prevCounter === REPOSITORIES.length - 1 ? 0 : prevCounter + 1
    );
  };

  return (
    // Here I render the App using the JSS styles
    <>
      <Header />
      <div className={classes.App}>
        <div className={classes.counterWrapper}>
          <DecrementButton onClick={handleDecrement} />
          <h1 className={classes.counterText}>Counter: {counter}</h1>
          <IncrementButton onClick={handleIncrement} />
        </div>

        <CurrentRepository repository={REPOSITORIES[counter]} />
      </div>
    </>
  );
}

// Exporting the App as the default component
export default App;

import React, { useState, useEffect } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { FaStar } from "react-icons/fa";
import { AiOutlineFrown } from "react-icons/ai";
import { getRepositoryData } from "../api/gitHub";

//custom style object using JSS
const useStyles = createUseStyles((theme) => ({
  repository: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "80%",
    marginTop: 30,
    padding: "20px 40px",
    borderRadius: 30,
    backdropFilter: "grayscale(0) brightness(1.6) blur(10px)",
    boxShadow:
      "0 0 20px rgba(26, 26, 26, 0.1), 0 0 40px rgba(26, 26, 26, 0.1), 0 0 80px rgba(26, 26, 26, 0.1)",
    "@media (max-width: 375px)": {
      width: "350px",
    },
  },
  repositoryName: {
    textTransform: "uppercase",
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  repositoryDescription: {
    fontSize: "1.1rem",
    marginBottom: "1rem",
    maxWidth: "300px",
  },
  repositoryStars: {
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
  },
  starIcon: {
    marginRight: "1rem",
    color: "purple",
  },
}));

function CurrentRepository({ repository }) {
  //styling
  const theme = useTheme();
  const classes = useStyles(theme);
  // state and effects
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    setError(false);
    setLoading(true);
    // Fetch repository data
    async function fetchData() {
      await getRepositoryData(repository)
        .then(({ data }) => {
          setData(data);
        })
        .catch(() => {
          setError(true);
        });
      setLoading(false);
    }

    fetchData();
  }, [repository]);

  return (
    <div className={classes.repository}>
      {!error ? (
        data &&
        !loading && (
          <>
            <h1 className={classes.repositoryName}>{data.full_name}</h1>
            <p className={classes.repositoryDescription}>{data.description}</p>
            <div className={classes.repositoryStars}>
              {data.stargazers_count > 0 ? (
                <>
                  <FaStar className={classes.starIcon} />
                  {data.stargazers_count}
                </>
              ) : (
                <>
                  <h1 className={classes.repositoryName}>"Not Found"</h1>
                  <p className={classes.repositoryDescription}>
                    "This repository could unfortunately not be found."
                  </p>
                  <div className={classes.repositoryStars}></div>
                  <AiOutlineFrown className={classes.frownIcon} />
                </>
              )}
            </div>
          </>
        )
      ) : (
        <>
          <h1 className={classes.repositoryName}>"Not Found"</h1>
          <p className={classes.repositoryDescription}>
            "This repository could unfortunately not be found."
          </p>
          <div className={classes.repositoryStars}></div>
          <AiOutlineFrown className={classes.frownIcon} />
        </>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default CurrentRepository;

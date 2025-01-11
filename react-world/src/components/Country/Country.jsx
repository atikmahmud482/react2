import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  //   const passWithParams = () => handleVisitedCountry(country)

  return (
    <div className="country">
      <h2>Name: {name?.common} </h2>
      <img src={flags.png} alt="" />
      <h4>Population: {population}</h4>
      <p>Area: {area} </p>
      <p>
        <small>Code:{cca3} </small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Flag
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "visited" : "going"} </button>
      {visited ? "I have visited this country" : "I want to visit"}
    </div>
  );
};

export default Country;

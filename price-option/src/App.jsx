import "./App.css";
import LineChart from "./components/LineChart/LineChart";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOption/PriceOptions";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      {/* <DaisyNav></DaisyNav> */}
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Watch from "./components/Watch/Watch";

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  // const watches = [
  //   { id: 1, name: "apple Watch", price: 200 },
  //   { id: 2, name: "samsung Watch", price: 300 },
  //   { id: 3, name: "mi Watch", price: 400 },
  // ];
  // const watches = [
  //   {
  //     id: 1,
  //     brand: "Apple",
  //     model: "Apple Watch Series 9",
  //     price: 399,
  //     features: [
  //       "Heart Rate Monitor",
  //       "GPS",
  //       "Blood Oxygen Sensor",
  //       "Always-On Retina Display",
  //     ],
  //     waterResistant: true,
  //     batteryLife: "18 hours",
  //   },
  //   {
  //     id: 2,
  //     brand: "Samsung",
  //     model: "Galaxy Watch 6",
  //     price: 349,
  //     features: [
  //       "ECG Monitoring",
  //       "Sleep Tracking",
  //       "Blood Pressure Monitor",
  //       "Customizable Watch Faces",
  //     ],
  //     waterResistant: true,
  //     batteryLife: "40 hours",
  //   },
  //   {
  //     id: 3,
  //     brand: "Garmin",
  //     model: "Garmin Venu 2",
  //     price: 399,
  //     features: [
  //       "Pulse Ox Sensor",
  //       "Fitness Tracking",
  //       "Music Storage",
  //       "Advanced Sleep Monitoring",
  //     ],
  //     waterResistant: true,
  //     batteryLife: "11 days",
  //   },
  //   {
  //     id: 4,
  //     brand: "Fitbit",
  //     model: "Fitbit Versa 4",
  //     price: 229,
  //     features: [
  //       "Heart Rate Tracking",
  //       "Step Counter",
  //       "Active Zone Minutes",
  //       "Smart Notifications",
  //     ],
  //     waterResistant: true,
  //     batteryLife: "6 days",
  //   },
  //   {
  //     id: 5,
  //     brand: "Amazfit",
  //     model: "GTR 4",
  //     price: 199,
  //     features: [
  //       "Dual-Band GPS",
  //       "Alexa Built-In",
  //       "Blood Oxygen Saturation",
  //       "Workout Recognition",
  //     ],
  //     waterResistant: true,
  //     batteryLife: "14 days",
  //   },
  // ];

  return (
    <>
      <h1>Vite + React</h1>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;

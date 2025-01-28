import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./GrandPa.css";

const GrandPa = () => {
  return (
    <div className="grandpa">
      <h2 className="grandpa">Grandpa</h2>
      <section className="flex">
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
    </div>
  );
};

export default GrandPa;

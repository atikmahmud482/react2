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

/*
 *1: Create a Context Api.
  2: Add provider for the context with a value.
  3: UseContext to access value in the context api.
 */
// module 46-8 done.
//custom hook (use diye start hoi, such as usetoggle, )
////hjfkdfhkd
//milestone 46

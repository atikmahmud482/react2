import MySelf from "../Myself/MySelf";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";

const Dad = () => {
  return (
    <div className="grandpa">
      <h2 className="grandpa">Dad</h2>
      <section className="">
        <MySelf></MySelf>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;

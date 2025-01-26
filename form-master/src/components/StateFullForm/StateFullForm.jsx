import { useState } from "react";

const StateFullForm = () => {
  const [email, setEmail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" />
        <br />
        <input type="password" name="password" />
        {/* <input type="text" /> */}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StateFullForm;

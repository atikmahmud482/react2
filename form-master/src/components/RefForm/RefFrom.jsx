import React from "react";

const RefFrom = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onClick={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        {/* <input type="text" /> */}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefFrom;

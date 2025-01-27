import React from "react";

const ReusableForm = () => {
  return (
    <div>
      <form>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="submit" />
        <br />
      </form>
    </div>
  );
};

export default ReusableForm;

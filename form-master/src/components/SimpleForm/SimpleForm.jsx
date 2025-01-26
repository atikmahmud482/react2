const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    // console.log("Form submitted");
  };
  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
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

export default SimpleForm;

import useInputState from "../hooks/useinputState";

const HookForm = () => {
  const [name, handleNameChange] = useInputState(null);

  const handleSubmit = (e) => {
    console.log("form data", name);

    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="password" name="password" />
        <br />
        <button className="btn btn-dash btn-primary mt-4 ">Submit</button>
      </form>
    </div>
  );
};

export default HookForm;

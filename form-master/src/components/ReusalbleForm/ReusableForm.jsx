const ReusableForm = ({
  formTitle,
  submitBtnText,
  handleSubmit = "Submit",
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      <h2 className="flex items-center justify-center">{formTitle}</h2>
      <div className="flex">
        <form
          onSubmit={handleLocalSubmit}
          className="space-y-4 p-4 max-w-md mx-auto border rounded-lg shadow">
          <input type="text" name="name" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <input type="password" name="password" />
          <br />
          <button className="btn btn-active btn-info " value={submitBtnText}>
            Submit
          </button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default ReusableForm;

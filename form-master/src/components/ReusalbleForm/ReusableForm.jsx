const ReusableForm = ({ formTitle, submitBtnText = "Submit" }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2 className="">{formTitle}</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 max-w-md mx-auto border rounded-lg shadow">
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value={submitBtnText} />
        <br />
      </form>
    </div>
  );
};

export default ReusableForm;

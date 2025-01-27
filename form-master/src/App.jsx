import "./App.css";
// import HookForm from "./components/HookForm/HookForm";
import ReusableForm from "./components/ReusalbleForm/ReusableForm";
// import RefFrom from "./components/RefForm/RefFrom";
// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import StateFullForm from "./components/StateFullForm/StateFullForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("sign up date", data);
  };
  const handleUpdateProfile = (data) => {
    console.log("update profile", data);
  };
  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm
        formTitle={"Sign Up"}
        handleSubmit={handleSignUpSubmit}></ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText="Update"></ReusableForm>
    </>
  );
}

export default App;

import "./App.css";
// import HookForm from "./components/HookForm/HookForm";
import ReusableForm from "./components/ReusalbleForm/ReusableForm";
// import RefFrom from "./components/RefForm/RefFrom";
// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import StateFullForm from "./components/StateFullForm/StateFullForm";

function App() {
  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={"Sign Up"}></ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        submitBtnText="Update"></ReusableForm>
    </>
  );
}

export default App;

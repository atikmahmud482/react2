import { useRef } from "react";

const RefFrom = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
  };
  return (
    <div>
      <form onClick={handleSubmit}>
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input ref={emailRef} type="email" name="email" />
        {/* <input type="text" /> */}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefFrom;

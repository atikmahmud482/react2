// const SimpleForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target.name.value);
//     console.log(e.target.email.value);
//     // console.log("Form submitted");
//   };
//   return (
//     <div>
//       <h2>Simple Form</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" />
//         <br />
//         <input type="email" name="email" />
//         {/* <input type="text" /> */}
//         <br />
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// };

// export default SimpleForm;

import { useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 max-w-md mx-auto border rounded-lg shadow">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          placeholder="Enter your message"
          required></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default SimpleForm;

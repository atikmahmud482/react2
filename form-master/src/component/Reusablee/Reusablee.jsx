import { useState } from "react";

function ReusableForm({ fields = [], onSubmit, buttonText }) {
  // Ensure `fields` is an array before using reduce
  const [formData, setFormData] = useState(
    Array.isArray(fields)
      ? fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
      : {}
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Guard clause to ensure `fields` is properly passed
  fields = [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
    },
  ];
  if (!Array.isArray(fields) || fields.length === 0) {
    return <p>No fields provided for the form!</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded shadow">
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block mb-1 text-gray-700">{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            placeholder={field.placeholder}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        {buttonText || "Submit"}
      </button>
    </form>
  );
}

export default ReusableForm;

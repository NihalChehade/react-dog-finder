import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewColorForm({ addColor }) {
  const [form, setForm] = useState({ name: "", value: "#000000" });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form)
    addColor(form);
    navigate("/colors");
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Color Name:</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="value">Color Value:</label>
      <input
        type="color"
        name="value"
        value={form.value}
        onChange={handleChange}
      />
      <button type="submit">Add Color</button>
    </form>
  );
}

export default NewColorForm;

import { useState } from "react";

export default function PersonalInfo({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    address: "",
    number: "",
    email: "",
    about: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <section className="personalInfo">
        <h2>Personal Info</h2>
        <form className="infoForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInput}
            required
          />
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleInput}
            required
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInput}
            required
          />
          <label htmlFor="number">Phone Number</label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleInput}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInput}
            required
          />
          <label htmlFor="about">About</label>
          <input
            type="text"
            id="about"
            name="about"
            value={formData.about}
            onChange={handleInput}
          />
          <button type="submit" aria-label="save button">
            Save
          </button>
        </form>
      </section>
    </>
  );
}

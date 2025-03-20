import { useState } from "react";

export default function PersonalInfo({ onSubmit }) {
  const [personalData, setFormData] = useState({
    name: "",
    surname: "",
    title: "", //new
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
    onSubmit(personalData);
    clearForm();
  };

  function clearForm() {
    setFormData({
      name: "",
      surname: "",
      title: "",
      address: "",
      number: "",
      email: "",
      about: "",
    });
  }

  return (
    <>
      <section aria-label="Personal Info Form" className="personalInfo">
        <h2>Personal Info</h2>
        <form className="infoForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            aria-label="Name Input"
            value={personalData.name}
            onChange={handleInput}
            required
          />
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            aria-label="Surname Input"
            value={personalData.surname}
            onChange={handleInput}
            required
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            aria-label="Title Input"
            value={personalData.title}
            onChange={handleInput}
            required
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            aria-label="Address Input"
            value={personalData.address}
            onChange={handleInput}
            required
          />
          <label htmlFor="number">Phone Number</label>
          <input
            type="tel"
            id="number"
            name="number"
            aria-label="Phone Number Input"
            value={personalData.number}
            onChange={handleInput}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            aria-label="Email Input"
            value={personalData.email}
            onChange={handleInput}
            required
          />
          <label htmlFor="about">About</label>
          <textarea
            id="about"
            name="about"
            aria-label="About Input"
            value={personalData.about}
            onChange={handleInput}
            required
          />
          <button type="submit" aria-label="save button">
            Save
          </button>
        </form>
      </section>
    </>
  );
}

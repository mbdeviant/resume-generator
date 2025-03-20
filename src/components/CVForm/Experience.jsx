import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../button";

export default function Experience({ onSubmit }) {
  const [savedExperience, setSavedExperience] = useState([]);
  const [experienceData, setExperienceData] = useState({
    id: "",
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setExperienceData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveExperienceData = () => {
    const id = uuidv4();
    const position = experienceData.position;
    const company = experienceData.company;
    const startDate = experienceData.startDate;
    const endDate = experienceData.endDate;
    const description = experienceData.description;

    let newExperienceData = {
      id,
      position,
      company,
      startDate,
      endDate,
      description,
    };
    setSavedExperience([...savedExperience, newExperienceData]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveExperienceData();
    onSubmit(savedExperience);
    clearForm();
  };

  useEffect(() => {
    onSubmit(savedExperience);
  }, [savedExperience, onSubmit]);

  function clearForm() {
    setExperienceData({
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  }

  function handleRemove() {
    const updatedData = [...savedExperience];
    updatedData.pop();
    setSavedExperience(updatedData);
  }

  return (
    <section aria-label="Experience Info Form" className="experience">
      <h2>Experience</h2>
      <form className="experienceForm" onSubmit={handleSubmit}>
        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          name="position"
          aria-label="Position Input"
          value={experienceData.position}
          onChange={handleInput}
          required
        />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          aria-label="Company Input"
          value={experienceData.company}
          onChange={handleInput}
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          aria-label="Experience Start Date Input"
          value={experienceData.startDate}
          onChange={handleInput}
          required
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          aria-label="Experience End Date Input"
          value={experienceData.endDate}
          onChange={handleInput}
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          aria-label="Experience Description Input"
          value={experienceData.description}
          onChange={handleInput}
        />
        <Button onRemove={handleRemove} />
      </form>
    </section>
  );
}

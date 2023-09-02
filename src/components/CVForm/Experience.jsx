import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../button";

export default function Experience() {
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
  }, [savedExperience]);

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
        <input type="text" id="position" />
        <label htmlFor="company">Company</label>
        <input type="text" id="company" />
        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" />
        <label htmlFor="endDate">End Date</label>
        <input type="date" id="endDate" />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" />
        <Button />
      </form>
    </section>
  );
}

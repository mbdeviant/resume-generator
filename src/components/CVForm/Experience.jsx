import { useState } from "react";
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

  return (
    <section aria-label="Experience Info Form" className="experience">
      <h2>Experience</h2>
      <form className="experienceForm">
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

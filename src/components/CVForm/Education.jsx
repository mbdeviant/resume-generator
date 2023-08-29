import { useState } from "react";
import Buttons from "../buttons";

export default function Education({ onSubmit }) {
  const [educationData, setEducationData] = useState({
    university: "",
    department: "",
    startDate: "",
    graduation: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(educationData);
  };
  return (
    <section aria-label="Education Info Form" className="education">
      <h2>Education</h2>
      <form className="educationForm" onSubmit={handleSubmit}>
        <label htmlFor="university">University</label>
        <input
          type="text"
          id="university"
          name="university"
          value={educationData.value}
          onChange={handleInput}
          required
        />
        <label htmlFor="department">Department</label>
        <input
          type="text"
          id="department"
          name="department"
          value={educationData.value}
          onChange={handleInput}
          required
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={educationData.startDate}
          onChange={handleInput}
          required
        />
        <label htmlFor="graduation">Graduation</label>
        <input
          type="date"
          id="graduation"
          name="graduation"
          value={educationData.graduation}
          onChange={handleInput}
          required
        />
        <Buttons />
      </form>
    </section>
  );
}

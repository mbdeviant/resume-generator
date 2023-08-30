import { useState } from "react";
import Buttons from "../buttons";

export default function Education({ onSubmit }) {
  const [educationData, setEducationData] = useState({
    university: "",
    department: "",
    startDate: "",
    graduation: "",
  });

  const [savedEducations, setSavedEducations] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveEducationData = () => {
    const university = educationData.university;
    const department = educationData.department;
    const startDate = educationData.startDate;
    const graduation = educationData.graduation;

    let newEducationData = { university, department, startDate, graduation };
    setSavedEducations([...savedEducations, newEducationData]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveEducationData();
    onSubmit(savedEducations);
    clearForm();
  };

  function clearForm() {
    setEducationData({
      university: "",
      department: "",
      startDate: "",
      graduation: "",
    });
  }

  return (
    <section aria-label="Education Info Form" className="education">
      <h2>Education</h2>
      <form className="educationForm" onSubmit={handleSubmit}>
        <label htmlFor="university">University</label>
        <input
          type="text"
          id="university"
          name="university"
          value={educationData.university}
          onChange={handleInput}
          required
        />
        <label htmlFor="department">Department</label>
        <input
          type="text"
          id="department"
          name="department"
          value={educationData.department}
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

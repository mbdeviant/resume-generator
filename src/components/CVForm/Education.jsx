import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../button";

export default function Education({ onSubmit }) {
  const [savedEducations, setSavedEducations] = useState([]);
  const [educationData, setEducationData] = useState({
    id: "",
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

  const saveEducationData = () => {
    const id = uuidv4();
    const university = educationData.university;
    const department = educationData.department;
    const startDate = educationData.startDate;
    const graduation = educationData.graduation;

    let newEducationData = {
      id,
      university,
      department,
      startDate,
      graduation,
    };

    setSavedEducations([...savedEducations, newEducationData]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveEducationData();
    onSubmit(savedEducations);
    clearForm();
  };
  useEffect(() => {
    onSubmit(savedEducations);
  }, [savedEducations, onSubmit]);

  function clearForm() {
    setEducationData({
      university: "",
      department: "",
      startDate: "",
      graduation: "",
    });
  }

  function handleRemove() {
    const updatedData = [...savedEducations];
    updatedData.pop();
    setSavedEducations(updatedData);
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
          aria-label="University Input"
          value={educationData.university}
          onChange={handleInput}
          required
        />
        <label htmlFor="department">Department</label>
        <input
          type="text"
          id="department"
          name="department"
          aria-label="Department Input"
          value={educationData.department}
          onChange={handleInput}
          required
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          aria-label=" University Start Date Input"
          value={educationData.startDate}
          onChange={handleInput}
          required
        />
        <label htmlFor="graduation">Graduation</label>
        <input
          type="date"
          id="graduation"
          name="graduation"
          aria-label="University Graduation Input"
          value={educationData.graduation}
          onChange={handleInput}
          required
        />
        <Button onRemove={handleRemove} />
      </form>
    </section>
  );
}

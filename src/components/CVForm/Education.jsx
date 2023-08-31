import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../button";

export default function Education({ onSubmit, onRemove, updatedData }) {
  const [educationData, setEducationData] = useState({
    id: "",
    university: "",
    department: "",
    startDate: "",
    graduation: "",
  });

  const [savedEducations, setSavedEducations] = useState([]);

  const handleRemoveEducation = (educationId) => {
    const updatedEducationData = educationData.filter(
      (education) => education.id !== educationId
    );
    onRemove(educationId); // Call the onRemove function from props
    setSavedEducations(updatedEducationData);
  };

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
    console.log(savedEducations);
  }, [savedEducations, onSubmit]);

  function clearForm() {
    setEducationData({
      university: "",
      department: "",
      startDate: "",
      graduation: "",
    });
  }
  function onClick() {
    console.log(savedEducations);
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
        <Button onClick={onClick} />
      </form>
    </section>
  );
}

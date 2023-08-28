import { useState, useEffect } from "react";
import Education from "./CVForm/Education";
import Experience from "./CVForm/Experience";
import PersonalInfo from "./CVForm/PersonalInfo";
import Preview from "./CVPreview/Preview";

export default function Content() {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  useEffect(() => {}, [formData]);

  return (
    <>
      <div className="content">
        <div className="mainContainer">
          <div className="forms">
            <PersonalInfo onSubmit={handleFormSubmit} />
            <Education />
            <Experience />
          </div>
          <Preview personalInfo={formData} />
        </div>
      </div>
    </>
  );
}

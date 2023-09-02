import { useState } from "react";
import Education from "./CVForm/Education";
import Experience from "./CVForm/Experience";
import PersonalInfo from "./CVForm/PersonalInfo";
import Preview from "./CVPreview/Preview";

export default function Content() {
  const [personalData, setPersonalData] = useState({});
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  const handlePersonalData = (data) => {
    setPersonalData(data);
  };
  const handleEducationData = (data) => {
    setEducationData(data);
  };
  const handleExperienceData = (data) => {
    setExperienceData(data);
  };

  return (
    <>
      <div className="content">
        <div className="mainContainer">
          <section aria-label="Forms" className="forms">
            <PersonalInfo onSubmit={handlePersonalData} />
            <Education onSubmit={handleEducationData} />
            <Experience onSubmit={handleExperienceData} />
          </section>
          <Preview
            personalInfo={personalData}
            educationInfo={educationData}
            experienceInfo={experienceData}
          />
        </div>
      </div>
    </>
  );
}

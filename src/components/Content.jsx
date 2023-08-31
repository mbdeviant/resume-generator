import { useState } from "react";
import Education from "./CVForm/Education";
import Experience from "./CVForm/Experience";
import PersonalInfo from "./CVForm/PersonalInfo";
import Preview from "./CVPreview/Preview";

export default function Content() {
  const [personalData, setPersonalData] = useState({});
  const [educationData, setEducationData] = useState([]);

  const handlePersonalData = (data) => {
    setPersonalData(data);
  };
  const handleEducationData = (data) => {
    setEducationData(data);
  };
  const handleRemoveEducation = (educationId) => {
    const updatedEducationData = educationData.filter(
      (education) => education.id !== educationId
    );
    setEducationData(updatedEducationData);

    console.log(educationData);
    console.log(updatedEducationData);
  };

  // something wrong with state management, removing the clicked item
  // then immediately adding it again

  return (
    <>
      <div className="content">
        <div className="mainContainer">
          <section aria-label="Forms" className="forms">
            <PersonalInfo onSubmit={handlePersonalData} />
            <Education
              onSubmit={handleEducationData}
              onRemove={handleRemoveEducation}
              updatedData={educationData}
            />
            <Experience />
          </section>
          <Preview
            personalInfo={personalData}
            educationInfo={educationData}
            onRemoveEducation={handleRemoveEducation}
          />
        </div>
      </div>
    </>
  );
}

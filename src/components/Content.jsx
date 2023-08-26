import { useState } from "react";
import Education from "./CVForm/Education";
import Experience from "./CVForm/Experience";
import PersonalInfo from "./CVForm/PersonalInfo";
import Preview from "./CVPreview/Preview";

export default function Content() {
  const [name, setName] = useState(null);

  function onName(e) {
    setName(e.target.value);
  }

  return (
    <>
      <div className="content">
        <div className="mainContainer">
          <div className="forms">
            <PersonalInfo onName={onName} />
            <Education />
            <Experience />
          </div>
          <Preview name={name} />
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import Education from "./CVForm/Education";
import Experience from "./CVForm/Experience";
import PersonalInfo from "./CVForm/PersonalInfo";
import Preview from "./CVPreview/Preview";

export default function Content() {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);

  function onName(e) {
    setName(e.target.value);
  }
  function onSurname(e) {
    setSurname(e.target.value);
  }

  return (
    <>
      <div className="content">
        <div className="mainContainer">
          <div className="forms">
            <PersonalInfo onName={onName} onSurname={onSurname} />
            <Education />
            <Experience />
          </div>
          <Preview name={name} surname={surname} />
        </div>
      </div>
    </>
  );
}

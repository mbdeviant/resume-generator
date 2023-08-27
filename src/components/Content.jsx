import { useState } from "react";
import Education from "./CVForm/Education";
import Experience from "./CVForm/Experience";
import PersonalInfo from "./CVForm/PersonalInfo";
import Preview from "./CVPreview/Preview";

export default function Content() {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [adress, setAdress] = useState(null);
  const [number, setNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [about, setAbout] = useState(null);

  function onName(e) {
    setName(e.target.value);
  }
  function onSurname(e) {
    setSurname(e.target.value);
  }
  function onAdress(e) {
    setAdress(e.target.value);
  }
  function onNumber(e) {
    setNumber(e.target.value);
  }
  function onEmail(e) {
    setEmail(e.target.value);
  }
  function onAbout(e) {
    setAbout(e.target.value);
  }

  return (
    <>
      <div className="content">
        <div className="mainContainer">
          <div className="forms">
            <PersonalInfo
              onName={onName}
              onSurname={onSurname}
              onAdress={onAdress}
              onNumber={onNumber}
              onEmail={onEmail}
              onAbout={onAbout}
            />
            <Education />
            <Experience />
          </div>
          <Preview
            name={name}
            surname={surname}
            adress={adress}
            number={number}
            email={email}
            about={about}
          />
        </div>
      </div>
    </>
  );
}

import Education from "./CVForm/Education";
import Experience from "./CVForm/Experience";
import PersonalInfo from "./CVForm/PersonalInfo";

export default function Content() {
  return (
    <>
      <div className="content">
        <div className="forms">
          <PersonalInfo />
          <Education />
          <Experience />
        </div>
      </div>
    </>
  );
}

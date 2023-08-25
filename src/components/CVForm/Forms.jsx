import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";

export default function Forms() {
  return (
    <div className="forms">
      <PersonalInfo />
      <Education />
      <Experience />
    </div>
  );
}

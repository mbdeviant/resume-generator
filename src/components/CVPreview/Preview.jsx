import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import PersonalPreview from "./PersonalPreview";

export default function Preview({ personalInfo, educationInfo }) {
  return (
    <section className="preview" aria-label="cv preview">
      <PersonalPreview personalInfo={personalInfo} />
      <EducationPreview educationInfo={educationInfo} />
      <ExperiencePreview />
    </section>
  );
}

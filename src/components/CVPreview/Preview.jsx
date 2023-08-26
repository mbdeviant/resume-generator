import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import PersonalPreview from "./PersonalPreview";

export default function Preview() {
  return (
    <section className="preview" aria-label="cv preview">
      <PersonalPreview />
      <EducationPreview />
      <ExperiencePreview />
    </section>
  );
}

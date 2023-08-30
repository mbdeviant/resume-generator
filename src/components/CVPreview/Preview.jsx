import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import PersonalPreview from "./PersonalPreview";

export default function Preview({
  personalInfo,
  educationInfo,
  onRemoveEducation,
}) {
  return (
    <section className="preview" aria-label="CV Preview">
      <PersonalPreview personalInfo={personalInfo} />
      <EducationPreview
        educationInfo={educationInfo}
        onRemoveEducation={onRemoveEducation}
      />
      <ExperiencePreview />
    </section>
  );
}

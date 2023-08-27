import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import PersonalPreview from "./PersonalPreview";

export default function Preview({
  name,
  surname,
  adress,
  number,
  email,
  about,
}) {
  return (
    <section className="preview" aria-label="cv preview">
      <PersonalPreview
        name={name}
        surname={surname}
        adress={adress}
        number={number}
        email={email}
        about={about}
      />
      <EducationPreview />
      <ExperiencePreview />
    </section>
  );
}

import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import PersonalPreview from "./PersonalPreview";

export default function Preview({
  name,
  surname,
  adress,
  phone,
  email,
  about,
}) {
  return (
    <section className="preview" aria-label="cv preview">
      <PersonalPreview
        name={name}
        surname={surname}
        adress={adress}
        phone={phone}
        email={email}
        about={about}
      />
      <EducationPreview />
      <ExperiencePreview />
    </section>
  );
}

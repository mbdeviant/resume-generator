import "./preview.css";

export default function ExperiencePreview({ experienceInfo }) {
  return (
    <section aria-label="Experience Preview" className="experiencePreview">
      <h4>Experience</h4>
      {experienceInfo.map((experience) => (
        <div key={experience.id} className="experienceItem">
          <p>{experience.position}</p>
          <p>{experience.company}</p>
          <p>From {experience.startDate}</p>
          <p>To {experience.endDate}</p>
          <p>{experience.description}</p>
          <hr />
        </div>
      ))}
    </section>
  );
}

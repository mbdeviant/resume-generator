import "./preview.css";

export default function ExperiencePreview({ experienceInfo }) {
  return (
    <section aria-label="Experience Preview" className="experiencePreview">
      <h4>Experience</h4>
      {experienceInfo.length > 0 ? (
        experienceInfo.map((experience) => (
          <div key={experience.id} className="experienceItem">
            <p className="bold">{experience.position}</p>
            <p>{experience.company}</p>
            <p>From {experience.startDate}</p>
            <p>To {experience.endDate}</p>
            <p>{experience.description}</p>
            <hr />
          </div>
        ))
      ) : (
        <div className="experienceItem">
          <p className="bold">Senior Firefighter - City Fire Department</p>
          <p>From 02-01-2014</p>
          <p>To Present</p>
          <p>
            Extinguished hundreds of fires and mastered the art of looking cool
            while stepping out of a firetruck.
          </p>
          <hr />
        </div>
      )}
    </section>
  );
}

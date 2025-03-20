import "./preview.css";

export default function ExperiencePreview({ experienceInfo }) {
  return (
    <section aria-label="Experience Preview" className="experiencePreview">
      <h4>Experience</h4>
      {experienceInfo.length > 0 ? (
        experienceInfo.map((experience) => (
          <div key={experience.id} className="experienceItem">
            <p className="bold">{experience.position}</p>
            <p aria-label="Experience Company">{experience.company}</p>
            <p aria-label="Experience Start Date">
              From {experience.startDate}
            </p>
            <p aria-label="Experience End Date">To {experience.endDate}</p>
            <p aria-label="Experience Description">{experience.description}</p>
          </div>
        ))
      ) : (
        <div className="experienceItem">
          <p className="bold" aria-label="Experience Company">
            Senior Firefighter - City Fire Department
          </p>
          <p aria-label="Experience Start Date">From 02-01-2014</p>
          <p aria-label="Experience End Date">To Present</p>
          <p aria-label="Experience Description">
            Learned how to fight fires, save lives, and run dramatically in slow
            motion away from explosions. Extinguished hundreds of fires and
            mastered the art of looking cool while stepping out of a firetruck.
          </p>
        </div>
      )}
    </section>
  );
}

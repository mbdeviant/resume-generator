import "./preview.css";

export default function EducationPreview({ educationInfo }) {
  return (
    <section aria-label="Education Preview" className="educationPreview">
      <h4>Education</h4>
      {educationInfo.length > 0 ? (
        educationInfo.map((education) => (
          <div key={education.id} className="educationItem">
            <div>
              <p className="bold">{education.university}</p>
              <p>{education.department}</p>
              <p>From {education.startDate}</p>
              <p>To {education.graduation}</p>
              <hr />
            </div>
          </div>
        ))
      ) : (
        <div className="educationItem">
          <p className="bold">Fire Academy of Excellence</p>
          <p>Department of Fire Science & Rescue Operations</p>
          <p>From 01-01-2010</p>
          <p>To 01-01-2014</p>
          <p>
            — Learned how to fight fires, save lives, and run dramatically in
            slow motion away from explosions.
          </p>
        </div>
      )}
    </section>
  );
}

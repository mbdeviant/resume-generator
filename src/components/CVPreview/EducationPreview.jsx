import "./preview.css";

export default function EducationPreview({ educationInfo }) {
  return (
    <section aria-label="Education Preview" className="educationPreview">
      <h4>Education</h4>
      {educationInfo.map((education) => (
        <div key={education.id} className="educationItem">
          <div>
            <p className="bold">{education.university}</p>
            <p>{education.department}</p>
            <p>From {education.startDate}</p>
            <p>To {education.graduation}</p>
            <hr />
          </div>
        </div>
      ))}
    </section>
  );
}

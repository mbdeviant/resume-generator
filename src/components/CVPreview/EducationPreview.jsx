import "./preview.css";

export default function EducationPreview({ educationInfo }) {
  return (
    <section aria-label="Education Preview" className="educationPreview">
      <h3>Education</h3>
      {educationInfo.map((education) => (
        <div key={education.id} className="educationItem">
          <div>
            <p>{education.university}</p>
            <p>{education.department}</p>
            <p>From {education.startDate}</p>
            <p>To {education.graduation}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

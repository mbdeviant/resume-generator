export default function EducationPreview({ educationInfo }) {
  return (
    <section aria-label="Education Preview" className="educationPreview">
      <h3>Education</h3>
      {educationInfo.map((education, index) => (
        <div key={index} className="educationItem">
          <p>{education.university}</p>
          <p>{education.department}</p>
          <p>From {education.startDate}</p>
          <p>To {education.graduation}</p>
        </div>
      ))}
    </section>
  );
}

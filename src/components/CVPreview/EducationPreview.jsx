export default function EducationPreview({ educationInfo }) {
  return (
    <section aria-label="Education Preview" className="educationPreview">
      <h3>Education</h3>
      <p>{educationInfo.university}</p>
      <p>{educationInfo.department}</p>
      <p>From {educationInfo.startDate}</p>
      <p>To {educationInfo.graduation}</p>
    </section>
  );
}

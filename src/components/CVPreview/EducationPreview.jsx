export default function EducationPreview({ educationInfo }) {
  return (
    <div className="educationPreview">
      <h3>Education</h3>
      <p>{educationInfo.university}</p>
      <p>{educationInfo.department}</p>
      <p>{educationInfo.start}</p>
      <p>{educationInfo.graduation}</p>
    </div>
  );
}

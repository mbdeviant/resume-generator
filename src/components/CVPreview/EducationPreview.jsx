export default function EducationPreview({
  department,
  university,
  start,
  end,
  grad,
}) {
  return (
    <div className="educationPreview">
      <h3>Education</h3>
      <p>{department}</p>
      <p>{university}</p>
      <p>{start}</p>
      <p>{end}</p>
      <p>{grad}</p>
    </div>
  );
}

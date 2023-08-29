export default function ExperiencePreview({
  position,
  company,
  start,
  end,
  desc,
}) {
  return (
    <section aria-label="Experience Preview" className="experiencePreview">
      <h3>Experience</h3>
      <p>{position}</p>
      <p>{company}</p>
      <p>{start}</p>
      <p>{end}</p>
      <p>{desc}</p>
    </section>
  );
}

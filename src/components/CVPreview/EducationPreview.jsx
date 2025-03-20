import "./preview.css";

export default function EducationPreview({ educationInfo }) {
  return (
    <section aria-label="Education Preview" className="educationPreview">
      <h4 aria-label="Education Preview Section">Education</h4>
      {educationInfo.length > 0 ? (
        educationInfo.map((education) => (
          <div key={education.id} className="educationItem">
            <div>
              <p className="bold" aria-label="University Name">
                {education.university}
              </p>
              <p aria-label="Department">{education.department}</p>
              <p aria-label="University Start Date">
                From {education.startDate}
              </p>
              <p aria-label="Graduation Date">To {education.graduation}</p>
              <hr />
            </div>
          </div>
        ))
      ) : (
        <div className="educationItem">
          <p className="bold" aria-label="University Name">
            Fire Academy of Excellence
          </p>
          <p aria-label="Department">
            Department of Fire Science & Rescue Operations
          </p>
          <p aria-label="University Start Date">From 01-01-2010</p>
          <p aria-label="Graduation Date">To 01-01-2014</p>
        </div>
      )}
    </section>
  );
}

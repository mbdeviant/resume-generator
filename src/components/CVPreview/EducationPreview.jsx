import "./preview.css";

export default function EducationPreview({ educationInfo }) {
  return (
    <section aria-label="Education Preview" className="educationPreview">
      {educationInfo.length > 0 ? (
        educationInfo.map((education) => (
          <div key={education.id} className="educationItem">
            <h4 aria-label="Education Preview Section">Education</h4>
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
          <p aria-label="Developer's Note" style={{ color: "orange" }}>
            This is just a preview. Only submitted data will appear in the PDF.
            If no data is submitted in a section, that section will not appear
            in the PDF.
          </p>
          <h4 aria-label="Education Preview Section">Education</h4>
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

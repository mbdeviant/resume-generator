import { useState } from "react";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import PersonalPreview from "./PersonalPreview";
import PDFPreview from "../PDFView/PdfView";
import { PDFViewer } from "@react-pdf/renderer";
import "./preview.css";

export default function Preview({
  personalInfo,
  educationInfo,
  experienceInfo,
}) {
  const [showPDF, setShowPDF] = useState(false);
  const handleDownloadPDF = () => {
    setShowPDF(true);
  };
  return (
    <div>
      <section className="preview" aria-label="CV Preview">
        <PersonalPreview personalInfo={personalInfo} />
        <EducationPreview educationInfo={educationInfo} />
        <ExperiencePreview experienceInfo={experienceInfo} />
      </section>
      <button onClick={handleDownloadPDF}>Save as PDF</button>
      {showPDF && (
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
          <PDFPreview
            personalInfo={"John Doe"}
            educationInfo={"Firefighting school"}
            experienceInfo={"Firefighting"}
          />
        </PDFViewer>
      )}
    </div>
  );
}

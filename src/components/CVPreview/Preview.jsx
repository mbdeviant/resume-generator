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
  const [pdfData, setPDFData] = useState(null);

  const handleDownloadPDF = async () => {
    const data = {
      personalInfoPDF: personalInfo,
      educationInfoPDF: educationInfo,
      experienceInfoPDF: experienceInfo,
    };
    setPDFData(data);
    console.log(pdfData.personalInfoPDF.name);
    console.log(pdfData.personalInfoPDF.title);

    if (data.personalInfoPDF && data.educationInfoPDF && data.experienceInfoPDF)
      setShowPDF(true);
    else setShowPDF(false);
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
            personalInfo={pdfData.personalInfoPDF}
            educationInfo={pdfData.educationInfoPDF}
            experienceInfo={pdfData.experienceInfoPDF}
          />
        </PDFViewer>
      )}
    </div>
  );
}

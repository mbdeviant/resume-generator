import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import PersonalPreview from "./PersonalPreview";
import PDFPreview from "../PDFView/PdfView";
import { pdf } from "@react-pdf/renderer";
import "./preview.css";

export default function Preview({
  personalInfo,
  educationInfo,
  experienceInfo,
}) {
  const handleDownloadPDF = async () => {
    const data = {
      personalInfoPDF: personalInfo,
      educationInfoPDF: educationInfo,
      experienceInfoPDF: experienceInfo,
    };

    const blob = await pdf(
      <PDFPreview
        personalInfo={data.personalInfoPDF}
        educationInfo={data.educationInfoPDF}
        experienceInfo={data.experienceInfoPDF}
      />
    ).toBlob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "resume.pdf";
    link.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div>
      <section className="preview" aria-label="CV Preview">
        <PersonalPreview personalInfo={personalInfo} />
        <EducationPreview educationInfo={educationInfo} />
        <ExperiencePreview experienceInfo={experienceInfo} />
      </section>
      <button className="saveButton" onClick={handleDownloadPDF}>
        Save as PDF
      </button>
    </div>
  );
}

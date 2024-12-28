import "./preview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function PersonalPreview({ personalInfo }) {
  return (
    <section aria-label="Personal Preview" className="personalPreview">
      <div className="previewHeader">
        <h3 className="name">
          {personalInfo.name} {personalInfo.surname}
        </h3>
        <h3 className="title">{personalInfo.title}</h3>
      </div>
      <p className="infoIcon">
        <FontAwesomeIcon icon={faEnvelope} />
        {personalInfo.email}
      </p>
      <p className="infoIcon">
        <FontAwesomeIcon icon={faPhone} />
        {personalInfo.number}
      </p>
      <p className="infoIcon">
        <FontAwesomeIcon icon={faLocationDot} />
        {personalInfo.address}
      </p>
      <h4>Summary</h4>
      <p>{personalInfo.about}</p>
    </section>
  );
}

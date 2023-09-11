import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function PersonalPreview({ personalInfo }) {
  return (
    <section aria-label="Personal Preview" className="personalPreview">
      <h3 className="name">
        {personalInfo.name} {personalInfo.surname}
      </h3>
      <p>
        <FontAwesomeIcon icon={faLocationDot} />
        {personalInfo.address}
      </p>
      <p>
        <FontAwesomeIcon icon={faPhone} />
        {personalInfo.number}
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        {personalInfo.email}
      </p>
      <p>{personalInfo.about}</p>
    </section>
  );
}

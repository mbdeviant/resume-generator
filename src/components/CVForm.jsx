import { useState } from "react";

function CVForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    education: "",
    experience: "",
    // other fields...
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      {/* other input fields... */}
    </form>
  );
}

export default CVForm;

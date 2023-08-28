import Buttons from "../buttons";

export default function Education() {
  return (
    <section className="education">
      <h2>Education</h2>
      <form className="educationForm">
        <label htmlFor="university">University</label>
        <input type="text" id="university" required />
        <label htmlFor="department">Department</label>
        <input type="text" id="department" required />
        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" required />
        <label htmlFor="graduation">Graduation</label>
        <input type="date" id="graduation" required />
        <Buttons />
      </form>
    </section>
  );
}

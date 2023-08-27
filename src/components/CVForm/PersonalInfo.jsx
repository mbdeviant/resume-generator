import Buttons from "../buttons";

export default function PersonalInfo({
  onName,
  onSurname,
  onAdress,
  onNumber,
  onEmail,
  onAbout,
}) {
  return (
    <>
      <section className="personalInfo">
        <h2>Personal Info</h2>
        <form className="infoForm">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={onName} required></input>
          <label htmlFor="surname">Surname</label>
          <input type="text" id="surname" onChange={onSurname} required />
          <label htmlFor="adress">Adress</label>
          <input type="text" id="adress" onChange={onAdress} required />
          <label htmlFor="number">Phone Number</label>
          <input type="tel" id="number" onChange={onNumber} required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={onEmail} required />
          <label htmlFor="about">About</label>
          <input type="text" id="about" onChange={onAbout} />
          <Buttons />
        </form>
      </section>
    </>
  );
}

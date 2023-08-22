import Buttons from "../buttons";

export default function PersonalInfo() {
  return (
    <>
      <section className="personalInfo">
        <h2>Personal Info</h2>
        <form className="infoForm">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required></input>
          <label htmlFor="surname">Surname</label>
          <input type="text" id="surname" required />
          <label htmlFor="adress">Adress</label>
          <input type="text" id="adress" required />
          <label htmlFor="number">Phone Number</label>
          <input type="tel" id="number" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
          <label htmlFor="about">About</label>
          <input type="text" id="about" />
          <Buttons />
        </form>
      </section>
    </>
  );
}

function PersonalInfo() {
  return (
    <>
      <div className="personalInfo">
        <label htmlFor="name">Name</label>
        <input type="text" id="name"></input>
        <label htmlFor="surname">Surname</label>
        <input type="text" id="surname" />
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
        <label htmlFor="adress">Adress</label>
        <input type="text" id="adress" />
        <label htmlFor="number">Phone Number</label>
        <input type="tel" id="number" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="about">About</label>
        <input type="text" id="about" />
      </div>
    </>
  );
}

export default PersonalInfo;

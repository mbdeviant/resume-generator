function Buttons({ onClick }) {
  return (
    <div className="btnContainer">
      <button type="submit" aria-label="add" onClick={onClick}>
        Add
      </button>
      <button type="button" aria-label="remove">
        Remove
      </button>
    </div>
  );
}
export default Buttons;

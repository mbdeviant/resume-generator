function Button({ onClick }) {
  return (
    <div className="btnContainer">
      <button type="submit" aria-label="add" onClick={onClick}>
        Add
      </button>
    </div>
  );
}
export default Button;

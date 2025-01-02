function Button({ onClick, onRemove }) {
  return (
    <div className="btnContainer">
      <button type="submit" aria-label="add" onClick={onClick}>
        Add
      </button>
      <button type="button" onClick={onRemove}>
        Remove last
      </button>
    </div>
  );
}
export default Button;

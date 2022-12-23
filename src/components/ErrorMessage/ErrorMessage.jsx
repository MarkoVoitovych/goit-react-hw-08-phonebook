export default function ErrorMessage({ error, onErrBtnClick }) {
  return (
    <div>
      <p>{error}</p>
      <button type="button" onClick={onErrBtnClick}>
        Close message
      </button>
    </div>
  );
}

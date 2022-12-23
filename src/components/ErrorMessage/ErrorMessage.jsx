import PropTypes from 'prop-types';

export default function ErrorMessage({ error, setError }) {
  return (
    <div>
      <p>{error}</p>
      <button type="button" onClick={setError}>
        Close message
      </button>
    </div>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
};

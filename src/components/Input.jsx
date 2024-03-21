import { PropTypes } from "prop-types"
function Input({ name, type, greeting, input, inputSetter }) {
  function handleTextInput(e) {
    inputSetter(e.target.value)
  }

  return (
    <>
      <label>
        {greeting}
        <input name={name} type={type} required onChange={handleTextInput} value={input} />
      </label>
    </>
  )
}

Input.defaultProps = {
  type: "text",
  greeting: "You haven't set the greeting prop",
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  greeting: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  inputSetter: PropTypes.func.isRequired
}

export default Input

function Navbar({ onClick }) {

  function handleClick(e) {
    onClick(e.target.value)
  }

  return (
    <nav>
      <button onClick={handleClick} value="contact">Contact</button>
      <button onClick={handleClick} value="education">Education</button>
      <button onClick={handleClick} value="experience">Experience</button>
      <button onClick={handleClick} value="preview">Preview</button>
    </nav>
  )
}

export default Navbar

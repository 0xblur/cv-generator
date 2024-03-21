import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
import { PropTypes } from "prop-types"

function ExperienceInput({ onSubmit, onCancel }) {
  const [company, setCompany] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleAddBtn() {
    const expObj = {
      company: company,
      startYear: startYear,
      endYear: endYear,
      title: title,
      desc: desc,
      id: uuidv4()
    };

    onSubmit(expObj);

  }

  function handleCancelBtn() {
    onCancel();
  }

  return (
    <div className="field">
      <fieldset>
        <h2>Add a new experience</h2>
        <label>
          Company name
          <input name="company" value={company} onChange={e => setCompany(e.target.value)} />
        </label>
        <label>
          Position title
          <input name="title" required value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Start year
          <input name="startYear" value={startYear} onChange={e => setStartYear(e.target.value)} />
        </label>
        <label>
          End year
          <input name="endYear" value={endYear} onChange={e => setEndYear(e.target.value)} />
        </label>
        <label htmlFor="textarea">
          Main responsibilities
          <textarea
            name="desc"
            id="textarea"
            cols="30"
            rows="10"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          >
          </textarea>
        </label>
        <div className="buttons">
          <button onClick={handleAddBtn}>Add</button>
          <button onClick={handleCancelBtn}>Cancel</button>
        </div>
      </fieldset>
    </div>
  )
}

ExperienceInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

export default ExperienceInput

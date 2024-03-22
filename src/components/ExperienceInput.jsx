import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
import { PropTypes } from "prop-types"

function ExperienceInput({ onSubmit, onEdit, onCancel, expObj }) {
  const [company, setCompany] = useState(expObj?.company || "");
  const [startYear, setStartYear] = useState(expObj?.startYear || "");
  const [endYear, setEndYear] = useState(expObj?.endYear || "");
  const [title, setTitle] = useState(expObj?.title || "");
  const [desc, setDesc] = useState(expObj?.desc || "");
  const [status, setStatus] = useState("new");

  if (expObj && status === "new") {
    setStatus("edit")
  }

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

  function handleEditBtn() {
    const props = {
      company: company,
      startYear: startYear,
      endYear: endYear,
      title: title,
      desc: desc,
      id: expObj.id
    }
    onEdit(props)
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
          {status === "new" ? <button onClick={handleAddBtn}>
            Add
          </button> : <button onClick={handleEditBtn}>
            Save
          </button>}
          {status === "new" ? <button onClick={handleCancelBtn}>Cancel</button> : null}
        </div>
      </fieldset>
    </div>
  )
}

ExperienceInput.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
}

export default ExperienceInput

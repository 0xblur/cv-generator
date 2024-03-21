import { v4 as uuidv4 } from "uuid";
import { PropTypes } from "prop-types"
import { useState } from "react";

function EducationInput({ onSubmit, onCancel }) {
  const [institution, setInstitution] = useState("");
  const [title, setTitle] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  function handleAddBtn() {
    const eduObj = {
      institution: institution,
      title: title,
      startYear: startYear,
      endYear: endYear,
      id: uuidv4()
    };

    onSubmit(eduObj);

  }

  function handleCancelBtn() {
    onCancel();
  }

  return (
    <div className="field">
      <fieldset>
        <h2>Add your education</h2>
        <label>
          Institution
          <input name="institution" value={institution} onChange={e => setInstitution(e.target.value)} />
        </label>
        <label>
          Title
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
        <div className="buttons">
          <button onClick={handleAddBtn}>Add</button>
          <button onClick={handleCancelBtn}>Cancel</button>
        </div>
      </fieldset>
    </div>
  )
}

EducationInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

export default EducationInput

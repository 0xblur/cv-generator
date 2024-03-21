import { useEffect, useState } from "react"
import EducationInput from "./EducationInput.jsx"
import EducationOutput from "./EducationOutput.jsx"

function Education({ data, setData }) {
  const [newEduAdded, setNewEduAdded] = useState(false);
  const eduInputVisible = data.eduInputVisible || false;
  const setEduInputVisible = (value) => setData({ ...data, eduInputVisible: value })
  const eduList = data.eduList || [];
  const setEduList = (value) => setData({ ...data, eduList: value })

  useEffect(() => {
    if (newEduAdded) {
      setEduInputVisible(false)
      setNewEduAdded(false)
    }
  }, [newEduAdded])


  return (
    <>
      <h2>Education</h2>
      <button onClick={() => setEduInputVisible(true)}>Add Education</button>
      {eduInputVisible ? <EducationInput onSubmit={addEducation} onCancel={() => setEduInputVisible(false)} /> : null}
    </>
    //TODO: Implement EducationOutput
  )

  function addEducation(newEducation) {
    setEduList([...eduList, newEducation])
    setNewEduAdded(true);
  }
}

export default Education

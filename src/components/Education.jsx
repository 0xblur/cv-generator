import { useEffect, useState } from "react"
import EducationInput from "./EducationInput.jsx"
import EducationOutput from "./EducationOutput.jsx"

function Education({ data, setData }) {
  const [newEduAdded, setNewEduAdded] = useState(false);
  const [status, setStatus] = useState("edit");
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

  const btnText = (status === "typing" ? "Preview" : "Edit")

  if (status === "submitted") {
    return (
      <>
        <h2>Experience</h2>
        <ul>
          {eduList.map(
            item =>
              <EducationOutput key={item.id} eduObj={item} />
          )}
        </ul>
        <button onClick={toggleStatus}>{btnText}</button>
      </>
    )
  }

  return (
    <>
      <h2>Education</h2>
      <button onClick={() => setEduInputVisible(true)}>New Education</button>
      {eduInputVisible ? <EducationInput onSubmit={addEducation} onCancel={() => setEduInputVisible(false)} /> : null}
      {eduList.map((item) => {
        return <EducationInput key={item.id} eduObj={item} onEdit={editEdu} />
      })}
      <button onClick={toggleStatus}>{status === "typing" ? "Preview" : "Edit"}</button>
    </>
  )

  function addEducation(newEducation) {
    setEduList([...eduList, newEducation])
    setNewEduAdded(true);
  }

  function editEdu(props) {
    setEduList(
      eduList.map(item => {
        if (item.id === props.id) {
          return { ...props }
        } else {
          return item
        }
      })
    )
  }

  function toggleStatus() {
    if (status === "submitted") {
      setStatus("typing")
    } else {
      setStatus("submitted")
    }
  }


}

export default Education

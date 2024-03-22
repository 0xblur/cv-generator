import { useEffect, useState } from "react";
import ExperienceInput from "./ExperienceInput.jsx"
import ExperienceOutput from "./ExperienceOutput.jsx"

function Experience({ data, setData }) {
  const [newExpAdded, setNewExpAdded] = useState(false);
  const [status, setStatus] = useState("typing")
  const expList = data.expList || []
  const setExpList = (value) => setData({ ...data, expList: value })
  const expInputVisible = data.expInputVisible || false;
  const setExpInputVisible = (value) => setData({ ...data, expInputVisible: value })


  useEffect(() => {
    if (newExpAdded) {
      setExpInputVisible(false)
      setNewExpAdded(false)
    }
  }, [newExpAdded])

  function addExp(newExp) {
    setExpList([...expList, newExp])
    setNewExpAdded(true);

  }

  function editExp(props) {
    setExpList(
      expList.map((item) => {
        if (item.id === props.id) {
          return { ...props }
        } else {
          return item
        }
      })
    )
  }

  function openExpInputField() {
    setExpInputVisible(true)
  }

  function toggleStatus() {
    if (status === "typing") {
      setStatus("submitted");
    } else {
      setStatus("typing")
    }
  }

  const btnText = status === "typing" ? "Preview" : "Edit"

  if (status === "submitted") {
    return (
      <>
        <h2>Experience</h2>
        <ul>
          {expList.map(
            item => {
              return <ExperienceOutput key={item.id} expObj={item} />
            }
          )}
        </ul>
        <button onClick={toggleStatus}>{btnText}</button>
      </>
    )
  }

  return (
    <>
      <h2>Experience</h2>
      <button onClick={openExpInputField}>New Experience</button>
      {expInputVisible ? <ExperienceInput onSubmit={addExp} onCancel={() => setExpInputVisible(false)} /> : null}
      {expList?.map((item) => {
        return <ExperienceInput key={item.id} expObj={item} onCancel={() => setExpInputVisible(false)} onEdit={editExp} />
      })}
      <button onClick={toggleStatus}>{btnText}</button>
    </>
  )
}

export default Experience

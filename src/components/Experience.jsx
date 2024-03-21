import { useEffect, useState } from "react";
import ExperienceInput from "./ExperienceInput.jsx"
import ExperienceOutput from "./ExperienceOutput.jsx"

function Experience({ data, setData }) {
  const [newExpAdded, setNewExpAdded] = useState(false);
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

  function openExpInputField() {
    setExpInputVisible(true)
  }

  return (
    <>
      <h2>Experience</h2>
      <button onClick={openExpInputField}>New Experience</button>
      {expInputVisible ? <ExperienceInput onSubmit={addExp} onCancel={() => setExpInputVisible(false)} /> : null}
      <ul>
        {expList.map(
          item => {
            return <ExperienceOutput key={item.id} expObj={item} />
          }
        )}
      </ul>
    </>
  )
}

export default Experience

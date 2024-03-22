import ContactOutput from "./ContactOutput.jsx"
import EducationOutput from "./EducationOutput"
import ExperienceOutput from "./ExperienceOutput"

function Preview({ contact, education, experience }) {
  const eduList = education.eduList;
  console.log(education)
  console.log(eduList)
  const expList = experience.expList;
  return (
    <>
      <h2>Preview</h2>
      <ContactOutput {...contact} />
      <section className="education">
        <h3>Education</h3>
        {eduList?.map((item) => {
          return <EducationOutput key={item.id} eduObj={item} />
        })}
      </section>
      <section className="experience">
        <h3>Experience</h3>
        {expList?.map((item) => {
          return <ExperienceOutput key={item.id} expObj={item} />
        })}
      </section>
    </>
  )
}

export default Preview

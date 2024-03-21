function EducationOutput({ eduObj }) {
  return (
    <>
      <section>
        <p>{eduObj.institution}</p>
        <p>{eduObj.title}</p>
        <p>{eduObj.startYear}</p>
        <p>{eduObj.endYear}</p>
      </section>
    </>
  )
}

export default EducationOutput

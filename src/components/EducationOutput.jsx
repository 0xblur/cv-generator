function EducationOutput({ eduObj }) {
  return (
    <>
      <div className="education item">
        <h3>{eduObj.institution}</h3>
        <p>{eduObj.title}</p>
        <p>{eduObj.startYear}</p>
        <p>{eduObj.endYear}</p>
      </div>
    </>
  )
}

export default EducationOutput

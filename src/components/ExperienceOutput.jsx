function ExperienceOutput({ expObj }) {
  return (
    <div className="experience item">
      <h3>{expObj.title}</h3>
      <p>{expObj.company}</p>
      <p>{expObj.startYear + " — " + expObj.endYear}</p>
      <p>{expObj.desc}</p>
    </div>
  )
}


export default ExperienceOutput

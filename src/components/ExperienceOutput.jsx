function ExperienceOutput({ expObj }) {
  return (
    <>
      <section>
        <h2>Experience</h2>
        <h3>{expObj.title}</h3>
        <p>{expObj.company}</p>
        <p>{expObj.startYear + " — " + expObj.endYear}</p>
        <p>{expObj.desc}</p>
      </section>
    </>
  )
}


export default ExperienceOutput

function ContactOutput({ firstName, lastName, email, phone }) {
  return (
    <section className="contact">
      <h2 className="fullName">{firstName + " " + lastName}</h2>
      <hr className="divider" />
      <div className="contact bar">
        <div className="contact bar item">
          {email}
        </div>
        <div className="contact bar item">
          {phone}
        </div>
        <div className="contact bar last item">
          https://github.com/0xblur
        </div>
      </div>
    </section>
  )
}

export default ContactOutput

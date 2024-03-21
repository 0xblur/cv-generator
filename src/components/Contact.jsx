import Input from "./Input.jsx"
function Contact({ data, setData }) {
  const firstName = data.firstName || "";
  const setFirstName = (newName) => setData({ ...data, firstName: newName })
  const lastName = data.lastName || "";
  const setLastName = (value) => setData({ ...data, lastName: value });
  const phone = data.phone || "";
  const setPhone = (value) => setData({ ...data, phone: value });
  const email = data.email || "";
  const setEmail = (value) => setData({ ...data, email: value });
  const status = data.status || "typing";
  const setStatus = (value) => setData({ ...data, status: value });

  const btnText = status === "typing" ? "Submit" : "Edit"

  function handleButton(e) {
    e.preventDefault();
    if (status === "typing") {
      setStatus("submitted");
    } else {
      setStatus("typing");
    }
  }

  if (status === "submitted") {
    return (
      <>
        <ContactOutput {...data} />
        <button onClick={handleButton}>{btnText}</button>
      </>
    )
  }

  return (
    <>
      <fieldset>
        <h2>Personal details</h2>
        <Input
          name={"firstName"}
          greeting={"First name:"}
          input={firstName}
          inputSetter={setFirstName}
        />
        <Input
          name={"lastName"}
          greeting={"Last name:"}
          input={lastName}
          inputSetter={setLastName}
        />
        <Input
          name={"phone"}
          type={"tel"}
          greeting={"Phone:"}
          input={phone}
          inputSetter={setPhone}
        />
        <Input
          name={"email"}
          type={"email"}
          greeting={"Email:"}
          input={email}
          inputSetter={setEmail}
        />
      </fieldset>
      <button onClick={handleButton}>{btnText}</button>
    </>

  )
}

function ContactOutput({ firstName, lastName, email, phone }) {
  return (
    <section className="contact">
      <h2>{firstName + " " + lastName}</h2>
      <hr />
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

export default Contact

import Navbar from "./components/Navbar.jsx"
import Contact from "./components/Contact.jsx"
import Education from "./components/Education.jsx"
import Experience from "./components/Experience.jsx"
import Preview from "./components/Preview.jsx"
import { useState } from 'react'
import "./styles/index.css"

function App() {
  const [active, setActive] = useState("contact");
  const [contactData, setContactData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [experienceData, setExperienceData] = useState({});
  const pages = {
    contact: {
      component: Contact,
      props: {
        data: contactData,
        setData: setContactData
      }
    },
    education: {
      component: Education,
      props: {
        data: educationData,
        setData: setEducationData,
      }
    },
    experience: {
      component: Experience,
      props: {
        data: experienceData,
        setData: setExperienceData,
      }
    },
    preview: {
      component: Preview,
      props: {
        contact: contactData,
        education: educationData,
        experience: experienceData
      },
    },
  }
  const ActivePage = pages[active].component
  const activePageProps = pages[active].props || {};

  return (
    <>
      <Navbar onClick={setActive} />
      <main>
        {ActivePage ? <ActivePage {...activePageProps} /> : null}
      </main>
    </>
  )
}

export default App

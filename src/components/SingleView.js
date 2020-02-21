import React, { useState, useEffect } from "react"
import "../styles/single.css"
import users from "../users.json"
import {
  FaUser,
  FaEnvelope,
  FaMobileAlt,
  FaGlobeAmericas,
  FaArrowLeft
} from "react-icons/fa"

export default props => {
  const [picture, setPicture] = useState("")
  const [nameTitle, setNameTitle] = useState("")
  const [nameFirst, setNameFirst] = useState("")
  const [nameLast, setNameLast] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [contactCell, setContactCell] = useState("")
  const [contactCity, setContactCity] = useState("")
  const [contactState, setContactState] = useState("")

  useEffect(() => {
    let id = props.match.params.id
    let contact = users.find(contact => contact.id == id)

    setPicture(contact.picture.thumbnail)
    setNameTitle(contact.name.title)
    setNameFirst(contact.name.first)
    setNameLast(contact.name.last)
    setContactEmail(contact.email)
    setContactPhone(contact.phone)
    setContactCell(contact.cell)
    setContactCity(contact.location.city)
    setContactState(contact.location.state)
  }, [props.match.params])

  function goBack(e) {
    e.preventDefault()
    props.history.push("/")
  }

  return (
    <div>
      <header>
        <button onClick={goBack}>
          <FaArrowLeft />
        </button>
        <img src={picture}></img>
      </header>
      <ul className="single">
        <li>
          <FaUser /> {nameTitle} + {nameFirst} + {nameLast}
        </li>
        <li>
          <FaEnvelope /> {contactEmail}
        </li>
        <li>
          <FaMobileAlt /> {contactPhone}
        </li>
        <li>
          <FaMobileAlt /> {contactCell}
        </li>
        <li>
          <FaGlobeAmericas /> {contactCity} + {setContactState}
        </li>
      </ul>
    </div>
  )
}

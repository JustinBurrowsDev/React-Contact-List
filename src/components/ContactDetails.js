import React, { useEffect, useState } from "react"
import data from "../randomUsers.json"

export default function(props) {
  const [nameTitle, setNameTitle] = useState("")
  const [nameFirst, setNameFirst] = useState("")
  const [nameLast, setNameLast] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [contactCell, setContactCell] = useState("")
  const [contactCity, setContactCity] = useState("")
  const [contactState, setContactState] = useState("")
  const [picture, setPicture] = useState("")

  useEffect(() => {
    let id = props.match.params.id

    let contact = data.find(contact => contact.id == id)

    setPicture(contact.picture.thumbnail)
    setNameTitle(contact.name.title)
    setNameFirst(contact.name.first)
    setNameLast(contact.name.last)
    setContactEmail(contact.email)
    setContactPhone(contact.phone)
    setContactCell(contact.cell)
    setContactCity(contact.city)
    setContactState(contact.state)
  }, [props.match.params])

  return (
    <div>
      <h1> Contact Details</h1>
      <img src={picture} />
      <p>Title: {nameTitle}</p>
      <p>First Name: {nameFirst}</p>
      <p>Last Name: {nameLast}</p>
      <p>Email: {contactEmail}</p>
      <p>Phone: {contactPhone}</p>
      <p>Cell: {contactCell}</p>
      <p>
        City: {contactCity}, {contactState}
      </p>
    </div>
  )
}

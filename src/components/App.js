import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from "./Home"
import ContactDetails from "./ContactDetails"

export default function() {
  return (
    // everthing inside the router tags is managed by the router component
    <Router>
      <div>
        <li>
          <Link exact to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/ContactDetails">contact details</Link>
        </li>
        <li><Link to="/ContactDetails/1">contact 1</Link>
        <li><Link to="/ContactDetails/2">contact 2</Link>
        <li><Link to="/ContactDetails/3">contact 3</Link></li>
        </li>
        <Route exact path="/" component={Home} />
        <Route path="/ContactDetails/:id" component={ContactDetails} />
      </div>
    </Router>
  )
}

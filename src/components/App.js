import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import ListView from "./ListView"
import SingleView from "./SingleView"

export default function() {
  return (
    // everthing inside the router tags is managed by the router component
    <Router>
      <div>
        <Route exact path="/" component={ListView} />
        <Route path="/:id" component={SingleView} />
      </div>
    </Router>
  )
}

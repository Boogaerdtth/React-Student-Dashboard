import React from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import "./App.css"

import Container from './Container'
import Nav from './Nav'


const App = () => (
  <div className="App">
    <Router>
      <Nav />
      <Container />
    </Router>
  </div>
)

export default App;

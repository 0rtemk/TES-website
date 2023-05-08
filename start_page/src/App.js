import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Auth from "./components/Auth";
import Event from "./components/Event";
import AddEvent from "./components/Event/AddEvent"


import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element = { <Main /> } />
          <Route path="/auth" index element = {<Auth />} />
          <Route path="/event" index element = {<Event />} />
          <Route path="/addevent" index element = {<AddEvent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

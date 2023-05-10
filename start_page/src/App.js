import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Auth from "./components/Auth";
import News from "./components/News";
import AddNew from "./components/News/AddNew";
import Events from "./components/Events";
import AddEvent from "./components/Events/AddEvent";


import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element = { <Main /> } />
          <Route path="/auth" index element = {<Auth />} />
          <Route path="/news" index element = {<News />} />
          <Route path="/addnew" index element = {<AddNew />} />
          <Route path="/events" index element = {<Events />} />
          <Route path="/addevent" index element = {<AddEvent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Auth from "./components/Auth";


import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element = { <Main /> } />
          <Route path="/auth" index element = {<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

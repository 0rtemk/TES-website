import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Auth from "./components/Auth";
import News from "./components/News";
import AddNew from "./components/News/AddNew";
import Events from "./components/Events";
import AddEvent from "./components/Events/AddEvent";

import CaslContext from './ability/caslContext';
import { buildAbilityFor } from './ability/caslAbility';
import Cookies from 'universal-cookie';
import CryptoJS from "crypto-js";

import './App.css'

const App = () => {
  const secretPass = "XkhZG4fW2t2W"; //Перенести в .env
  const cookies = new Cookies();

  let ability
  if (cookies.get('cryptData')) {
    ability = buildAbilityFor(
      JSON.parse(
        CryptoJS.AES.decrypt(cookies.get('cryptData'), secretPass).toString(CryptoJS.enc.Utf8)
      ).role
    )
  }
  else ability = buildAbilityFor('visitor')
  return (
    <>
      <CaslContext.Provider value={ability}>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Main />} />
            <Route path="/auth" index element={<Auth />} />
            <Route path="/news" index element={<News />} />
            <Route path="/addnew" index element={<AddNew />} />
            <Route path="/events" index element={<Events />} />
            <Route path="/addevent" index element={<AddEvent />} />
          </Routes>
        </BrowserRouter>
      </CaslContext.Provider>
    </>
  )
}

export default App

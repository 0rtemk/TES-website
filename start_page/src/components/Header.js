import React, { useState } from "react"
import logo from "../img/logo.png"
import { GrMenu } from "react-icons/gr"

const Header = () => {
  const [isActive, setActive] = useState("false")

  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <>
      <header className="header">
        <nav className="nav-bg navbar navbar-expand-xl d-flex align-items-center py-0">
          <div className="container-fluid px-0">
            <div className="px-2">
              <a href="/#">
                <img src={logo} alt="logo" width="75px" height="75px"></img>
              </a>
            </div>
            <div className="px-3">
              <button onClick={handleToggle} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false">
                <GrMenu />
              </button>
            </div>

            <div className="collapse navbar-collapse" id="navbar">
              <ul
                className={!isActive ? "nav-collapsed-items navbar-nav" : "navbar-nav col-md-auto"}
                id="navigation">
                <li className="nav-item px-2">
                  <a href="/#" className="nav-link text-white text-decoration-none fs-4">Новости</a>
                </li>
                <li className="nav-item px-2">
                  <a href="/#" className="nav-link text-white text-decoration-none fs-4">Мероприятия</a>
                </li>
                <li className="nav-item px-2">
                  <a href="#Mission" className="nav-link text-white text-decoration-none fs-4">Миссия школы</a>
                </li>
                <li className="nav-item px-2">
                  <a href="#ForStudents" className="nav-link text-white text-decoration-none fs-4">Что даёт школа</a>
                </li>
                <li className="nav-item px-2">
                  <a href="#Teachers" className="nav-link text-white text-decoration-none fs-4">Преподаватели</a>
                </li>
              </ul>

              <div className={!isActive ? "nav-collapsed-items px-2" : "nav-collapsed-auth"}>
                <hr className={!isActive ? "nav-collapsed-items hr" : "d-none"}></hr>
                <a href="/#" className="btn-sm text-black text-decoration-none fs-4" id="auth">Войти</a>
              </div>
            </div>
          </div>
        </nav>

        <div className="title-header text-white text-center">
          <div className="fs-1 text-bold">Школа технологического предпринимательства</div>
          <div className="fs-5">Программа для талантливой молодежи по созданию инновационного бизнеса,</div>
          <div className="fs-5">направленная на вывод технологических стартапов на рынок</div>
        </div>
      </header >
    </>
  )
}

export default Header
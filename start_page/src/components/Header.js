import React, {useState} from "react"
import logo from "../img/logo.png"
import { GrMenu } from "react-icons/gr"

const Header = () => {
  const [isActive, setActive] = useState("false")

  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <>
      <header className="header row row-cols-1">
        <nav className="nav-bg navbar navbar-expand-lg d-flex align-items-center py-0">
          <div className="container-fluid">
            <div className="px-3">
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
                className={!isActive ? "nav-collapsed-items navbar-nav" : "navbar-nav"} 
                id="navigation">
                <li className="nav-item px-3">
                  <a href="/#" className="nav-link text-white text-decoration-none fs-4">Новости</a>
                </li>
                <li className="nav-item px-3">
                  <a href="/#" className="nav-link text-white text-decoration-none fs-4">Мероприятия</a>
                </li>
                <li className="nav-item px-3">
                  <a href="/#" className="nav-link text-white text-decoration-none fs-4">Миссия школы</a>
                </li>
                <li className="nav-item px-3">
                  <a href="/#" className="nav-link text-white text-decoration-none fs-4">Что даёт школа</a>
                </li>
                <li className="nav-item px-3">
                  <a href="/#" className="nav-link text-white text-decoration-none fs-4">Преподаватели</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="title-header text-white col-xs-5 text-center">
          <div className="fs-1 text-bold">Школа технологического предпринимательства</div>
          <div className="fs-5">Программа для талантливой молодежи по созданию инновационного бизнеса,</div>
          <div className="fs-5">направленная на вывод технологических стартапов на рынок</div>
        </div>
      </header >
    </>
  )
}

export default Header
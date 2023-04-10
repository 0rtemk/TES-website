import React from "react"

class Header extends React.Component {
    render() {
        return (
            <div class="header row row-cols-1">
                <nav>
                  <a class="fs-4 me-3 py-2 d-none d-md-inline-block text-white text-decoration-none" href="/#">Новости</a>
                  <a class="fs-4 me-3 py-2 d-none d-md-inline-block text-white text-decoration-none" href="/#">Мероприятия</a>
                  <a class="fs-4 me-3 py-2 d-none d-md-inline-block text-white text-decoration-none" href="/#">Миссия школы</a>
                  <a class="fs-4 me-3 py-2 d-none d-md-inline-block text-white text-decoration-none" href="/#">Что даёт школа</a>
                  <a class="fs-4 me-3 py-2 d-none d-md-inline-block text-white text-decoration-none" href="/#">Преподаватели</a>
                </nav>
          
                <div class="title-header text-white col-xs-5 text-center">
                  <h1>Школа технологического предпринимательства</h1>
                  <p class="fs-5 w-75">Программа для талантливой молодежи по созданию инновационного бизнеса, направленная на вывод технологических стартапов на рынок</p>
                </div>
            </div>
         )
  }
}

export default Header
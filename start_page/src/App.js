import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import './components/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

class App extends React.Component {
    render() {
      return (<div class="container">
          <Header />
          <Main />
          <Footer />
        </div>)
  }
}
export default App

import React from "react"
import Mission from "./Main/Mission"
import ForStudents from "./Main/ForStudents"
import Teachers from "./Main/Teachers"

import Header from "./Main/Header"
import Footer from "./Main/Footer"
import ScrollButton from "./Main/ScrollButton"

const Main = () => {
    return (
        <>
            <Header />
            <div className="text-center">
                <Mission />
                <ForStudents />
                <Teachers />
            </div>
            <ScrollButton />
            <Footer />
        </>
    )
}

export default Main
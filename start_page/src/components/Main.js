import React from "react"
import Mission from "./Main/Mission"
import ForStudents from "./Main/ForStudents"
import Teachers from "./Main/Teachers"

const Main = () => {
    return (
        <>
            <div className="text-center">
                <Mission />
                <ForStudents />
                <Teachers />
            </div>
        </>
    )
}

export default Main
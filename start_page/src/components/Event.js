import React, { useState } from "react";
import CreateButton from "./Event/CreateButton"
import Modal from "./Event/Modal"

const Event = () => {

    const [modalActive, setModalActive] = useState(false)
    
    return (
        <>
            <Modal active={modalActive} setActive={setModalActive}/>

            <div className="event-bg">
                <div className="content container-fluid d-flex justify-content-center w-80e p-0">
                    <div className="row w-100 d-flex align-items-center mt-4">
                        <div className="title col bg-secondary text-center p-3">
                            <strong className="text-white fs-1">Мероприятия</strong>
                        </div>
                        
                        <div className="cont row m-0 mt-4" align="center">
                            <div className="col p-3">
                                <div className="event-card p-3">
                                    <div className="event-card-body row">
                                        <div className="col card-title text-black">
                                            <p className="fs-5">Название проекта</p>
                                            <p className="pe">Конец приема заявок:</p>
                                            <p className="pe">Начало:</p>
                                            <p className="pe">Конец:</p>
                                            <p className="pe">Организатор:</p>
                                            <p className="pe">Технологический фокус:</p>
                                            <p className="pe">Призовой фонд:</p>
                                        </div>
                                        <div className="col event-card-img ms-5 mt-5" align="center">
                                            <img className="card-img" src alt=""></img>
                                        </div>
                                    </div>
                                    <div className="descbutton w-25 m-auto p-1 mt-2" onClick={() => setModalActive(true)}>
                                        <p className="pe">Подробнее</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3">
                                <div className="event-card p-3">
                                    <div className="event-card-body row">
                                        <div className="col card-title text-black">
                                            <p className="fs-5">Название проекта</p>
                                            <p className="pe">Конец приема заявок:</p>
                                            <p className="pe">Начало:</p>
                                            <p className="pe">Конец:</p>
                                            <p className="pe">Организатор:</p>
                                            <p className="pe">Технологический фокус:</p>
                                            <p className="pe">Призовой фонд:</p>
                                        </div>
                                        <div className="col event-card-img ms-5 mt-5" align="center">
                                            <img className="card-img" src alt=""></img>
                                        </div>
                                    </div>
                                    <div className="descbutton w-25 m-auto p-1 mt-2">
                                        <p className="pe">Подробнее</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3">
                                <div className="event-card p-3">
                                    <div className="event-card-body row">
                                        <div className="col card-title text-black">
                                            <p className="fs-5">Название проекта</p>
                                            <p className="pe">Конец приема заявок:</p>
                                            <p className="pe">Начало:</p>
                                            <p className="pe">Конец:</p>
                                            <p className="pe">Организатор:</p>
                                            <p className="pe">Технологический фокус:</p>
                                            <p className="pe">Призовой фонд:</p>
                                        </div>
                                        <div className="col event-card-img ms-5 mt-5" align="center">
                                            <img className="card-img" src alt=""></img>
                                        </div>
                                    </div>
                                    <div className="descbutton w-25 m-auto p-1 mt-2">
                                        <p className="pe">Подробнее</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3">
                                <div className="event-card p-3">
                                    <div className="event-card-body row">
                                        <div className="col card-title text-black">
                                            <p className="fs-5">Название проекта</p>
                                            <p className="pe">Конец приема заявок:</p>
                                            <p className="pe">Начало:</p>
                                            <p className="pe">Конец:</p>
                                            <p className="pe">Организатор:</p>
                                            <p className="pe">Технологический фокус:</p>
                                            <p className="pe">Призовой фонд:</p>
                                        </div>
                                        <div className="col event-card-img ms-5 mt-5" align="center">
                                            <img className="card-img" src alt=""></img>
                                        </div>
                                    </div>
                                    <div className="descbutton w-25 m-auto p-1 mt-2">
                                        <p className="pe">Подробнее</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3">
                                <div className="event-card p-3">
                                    <div className="event-card-body row">
                                        <div className="col card-title text-black">
                                            <p className="fs-5">Название проекта</p>
                                            <p className="pe">Конец приема заявок:</p>
                                            <p className="pe">Начало:</p>
                                            <p className="pe">Конец:</p>
                                            <p className="pe">Организатор:</p>
                                            <p className="pe">Технологический фокус:</p>
                                            <p className="pe">Призовой фонд:</p>
                                        </div>
                                        <div className="col event-card-img ms-5 mt-5" align="center">
                                            <img className="card-img" src alt=""></img>
                                        </div>
                                    </div>
                                    <div className="descbutton w-25 m-auto p-1 mt-2"  >
                                        <p className="pe">Подробнее</p>
                                    </div>
                                </div>
                            </div>
                            <CreateButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Event
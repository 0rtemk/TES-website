import React from 'react';
import "./modal.css"


const Modal = ({ active, data, setActive, children }) => {

    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                    {children}
                    <div className="container d-flex justify-content-center">
                        <div className="row d-flex align-items-center">
                            <p className="text-center text-black fs-4">{data.event_name}</p>
                            <div className="inf-card d-flex justify-content-center p-2">
                                <div className="inf-card-body row">
                                    <div className="pe fs-6"><strong>Информация о проекте: </strong>{data.event_info}</div>
                                    <div className="pe fs-6"><strong>Тип проекта: </strong>{data.event_typeproject}</div>
                                    <div className="pe fs-6"><strong>Название направления: </strong>{data.event_direction}</div>
                                    <div className="pe fs-6"><strong>Навыки мероприятия: </strong>{data.event_skills}</div>
                                    <div className="event-card-img w-75 mx-auto pt-3">
                                        <img className="card-img" src={data.event_imageURL} alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
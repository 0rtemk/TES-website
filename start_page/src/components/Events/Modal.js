import React from 'react';
import "./modal.css"


const Modal = ({active, setActive, children}) => {
     
    return (
        <> 
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
                    <div className="container d-flex justify-content-center">
                        <div className="row d-flex align-items-center">
                            <p className="text-center text-black fs-4">Название проекта</p>
                            <div className="inf-card d-flex justify-content-center p-2">
                                <div className="inf-card-body row">
                                    <p>Информация о проекте:</p>
                                    <p>Тип проекта:</p>
                                    <p>Название направления:</p>
                                    <p>Навыки мероприятия:</p>
                                    <div className="inf-card-img w-75 mx-auto">
                                        <img className="card-img" alt=""></img>
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
import React, { useState, useEffect } from "react";
import Modal from "./Events/Modal";
import Can from "../ability/can";
import axios from "axios";
import { BiX } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { GrRadialSelected } from "react-icons/gr";

const Events = () => {
    const navigate = useNavigate();
    const [events, setEvents] = useState('')
    const [modalActive, setModalActive] = useState(false)
    const [modalData, setModalData] = useState('')

    const [updateModalActive, setUpdateModalActive] = useState(false)
    const [updateModalData, setUpdateModalData] = useState('')

    useEffect(() => {
        getEvents()
    }, [])

    async function getEvents() {
        await axios.get('events/allEvents')
            .then(response => {
                setEvents(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    async function deleteEvent(id) {
        await axios.post("events/deleteEvent", { _id: id })
            .then(
                getEvents()
            )
            .catch(error => {
                console.log(error)
            })
    }

    async function updateEvent() {
        event.preventDefault()
        await axios.post("events/updateEvent", { 
            _id: updateModalData._id,
            event_name: updateModalData.event_name, 
            event_info: updateModalData.event_info, 
            event_direction: updateModalData.event_direction, 
            event_tags: updateModalData.event_tags,  
            event_skills: updateModalData.event_skills, 
            event_start: new Date(document.getElementById('updateStartdate').value), 
            event_finish: new Date(document.getElementById('updateEnddate').value), 
            event_imageURL: updateModalData.event_imageURL, 
            event_typeproject: updateModalData.event_typeproject,
            event_organizer: updateModalData.event_organizer,
            event_stack_focus: updateModalData.event_stack_focus,
            event_money: updateModalData.event_money
        })
        .then(
            getEvents(),
            setUpdateModalActive(false)
        )
        .catch(error => {
            if (error.response.data.message) alert(error.response.data.message)
            else console.log(error)
        })
    }

    const getDate = (currentDate) => {
        const created_date = new Date(currentDate)

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const year = created_date.getFullYear();
        const month = months[created_date.getMonth()];
        const date = created_date.getDate();
        const hour = created_date.getHours();
        const min = created_date.getMinutes();
        const sec = created_date.getSeconds();
        const time = date + ', ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;

        return time
    }

    return (
        <>
            <Modal active={modalActive} data={modalData} setActive={setModalActive} />

            <div className="event-bg">
                <div className="d-flex justify-content-end fs-1 mx-2">
                    <div className="position-absolute">
                        <Link to="/">
                            <BiX />
                        </Link>
                    </div>
                </div>
                <div className="event-content container-fluid d-flex justify-content-center w-80e p-0">
                    <div className="row w-100 d-flex align-items-center mt-4">
                        <div className="title col bg-secondary text-center p-3">
                            <strong className="text-white fs-1">Мероприятия</strong>
                        </div>

                        <div className="event-cont m-0 mt-4" align="center">
                            <Can I="publish" a="events">
                                <div className="descbutton w-25 m-auto p-1">
                                    <Link to="/addEvent" style={{ textDecoration: "none", color: "black" }}>
                                        <span>Создать мероприятие</span>
                                    </Link>
                                </div>
                            </Can>
                            {
                                events && events.map((currentEvent) =>
                                    <div className="p-3">
                                        <div className="event-card p-3">
                                            <div className="fs-4 pb-2">{currentEvent.event_name}</div>
                                            <div className="event-card-body row">
                                                <div className="col card-title text-black">
                                                    <div className="pe fs-6"><strong>Начало: </strong>{getDate(currentEvent.event_start)}</div>
                                                    <div className="pe fs-6"><strong>Конец: </strong>{getDate(currentEvent.event_finish)}</div>
                                                    <div className="pe fs-6"><strong>Организатор: </strong>{currentEvent.event_organizer}</div>
                                                    <div className="pe fs-6"><strong>Технологический фокус: </strong>{currentEvent.event_stack_focus}</div>
                                                    <div className="pe fs-6"><strong>Призовой фонд: </strong>{currentEvent.event_money}</div>
                                                </div>
                                                <div className="col event-card-img">
                                                    <img className="card-img" src={currentEvent.event_imageURL} alt=""></img>
                                                </div>
                                            </div>
                                            <div className="descbutton w-25 m-auto p-1 mt-2" onClick={() => { setModalActive(true); setModalData(currentEvent) }}>
                                                <p className="pe">Подробнее</p>
                                            </div>
                                            <Can I='publish' a='news'>
                                                <div className="text-center pt-3">
                                                    <button className="btn btn-danger mx-3" value={currentEvent._id} onClick={event => deleteEvent(event.target.value)}>Удалить мероприятие</button>
                                                    <button className="btn btn-primary mx-3" value={currentEvent._id}
                                                        onClick={() => {
                                                            setUpdateModalActive(true)
                                                            setUpdateModalData(currentEvent)
                                                            document.getElementById('updateStartdate').value = getDate(updateModalData.event_start)
                                                            document.getElementById('updateEnddate').value = getDate(updateModalData.event_finish)
                                                        }}>Редактировать мероприятие</button>
                                                </div>
                                            </Can>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className={updateModalActive ? "modal active" : "modal"} onClick={() => setUpdateModalActive(false)}>
                <div className={updateModalActive ? "updateModal__content active" : "updateModal__content"} onClick={e => e.stopPropagation()}>
                    <div className="title bg-secondary text-center p-3">
                        <strong className="text-white fs-1">Редактировать мероприятие</strong>
                    </div>

                    <form onSubmit={updateEvent} className="forme fs-5" align="center">
                        <div className='row'>
                            <div className='col' align="center">
                                <div className=" row p-2 text-start">
                                    <div htmlFor="title">Название:</div>
                                    <input type="text" id="title"
                                        value={updateModalData.event_name}
                                        onChange={event => setUpdateModalData({ ...updateModalData, event_name: event.target.value })} />
                                </div>
                                <div className="row p-2 text-start">
                                    <div htmlFor="info">Информация о проекте:</div>
                                    <input type="text" id="info"
                                        value={updateModalData.event_info}
                                        onChange={event => setUpdateModalData({ ...updateModalData, event_info: event.target.value })} />
                                </div>
                                <div className="str row p-2 text-start">
                                    <div htmlFor="type">Тип проекта:</div>
                                    <select id="type" onChange={event => setUpdateModalData({ ...updateModalData, event_typeproject: event.target.value })}>
                                        <option>&#160;</option>
                                        {updateModalData.event_typeproject == 'Научный'
                                            ? <option selected>Научный</option>
                                            : <option>Научный</option>
                                        }
                                        {updateModalData.event_typeproject == 'Коммерческий'
                                            ? <option selected>Коммерческий</option>
                                            : <option>Коммерческий</option>
                                        }
                                        {updateModalData.event_typeproject == 'Учебный'
                                            ? <option selected>Учебный</option>
                                            : <option>Учебный</option>
                                        }
                                    </select>
                                </div>
                                <div className="str row p-2 text-start">
                                    <div htmlFor="tags">Теги:</div>
                                    <input type="text" id="tags"
                                        value={updateModalData.event_tags}
                                        onChange={event => setUpdateModalData({ ...updateModalData, event_tags: event.target.value })} />
                                </div>
                                <div className="str row p-2 text-start">
                                    <div htmlFor="titlen">Название направления:</div>
                                    <select id="titlen" onChange={event => setUpdateModalData({ ...updateModalData, event_direction: event.target.value })}>
                                        <option>&#160;</option>
                                        {updateModalData.event_direction == '\"Веб-технологии\"'
                                            ? <option selected>"Веб-технологии"</option>
                                            : <option>"Веб-технологии"</option>
                                        }
                                        {updateModalData.event_direction == '\"Искусственный интеллект\"'
                                            ? <option selected>"Искусственный интеллект"</option>
                                            : <option>"Искусственный интеллект"</option>
                                        }
                                        {updateModalData.event_direction == '\"Китайский язык\"'
                                            ? <option selected>"Китайский язык"</option>
                                            : <option>"Китайский язык"</option>
                                        }
                                    </select>
                                </div>
                                <div className="str row p-2 text-start">
                                    <div htmlFor="skill">Навыки мероприятия:</div>
                                    <select id="skill" onChange={event => setUpdateModalData({ ...updateModalData, event_skills: event.target.value })}>
                                        <option>&#160;</option>
                                        {updateModalData.event_skills == 'С++'
                                            ? <option selected>С++</option>
                                            : <option>С++</option>
                                        }
                                        {updateModalData.event_skills == 'С#'
                                            ? <option selected>С#</option>
                                            : <option>С#</option>
                                        }
                                        {updateModalData.event_skills == 'Python'
                                            ? <option selected>Python</option>
                                            : <option>Python</option>
                                        }
                                        {updateModalData.event_skills == 'PHP'
                                            ? <option selected>PHP</option>
                                            : <option>PHP</option>
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='col' align="center">
                                <div className="str row p-2 text-start">
                                    <div htmlFor="startdate">Начало проекта:</div>
                                    <input type="text" id="updateStartdate" />
                                </div>
                                <div className="str row p-2 text-start">
                                    <div htmlFor="enddate">Конец проекта:</div>
                                    <input type="text" id="updateEnddate" />
                                </div>
                                <div className="str row p-2 text-start">
                                    <div htmlFor="organizer">Организатор:</div>
                                    <input type="text" id="organizer" 
                                        value={updateModalData.event_organizer}
                                        onChange={event => setUpdateModalData({ ...updateModalData, event_organizer: event.target.value })}/>
                                </div>
                                <div className="str row p-2 text-start">
                                    <div htmlFor="stackFocus">Технический фокус:</div>
                                    <input type="text" id="stackFocus" 
                                        value={updateModalData.event_stack_focus}
                                        onChange={event => setUpdateModalData({ ...updateModalData, event_stack_focus: event.target.value })}/>
                                </div>
                                <div className="str row p-2 text-start">
                                    <div htmlFor="money">Призовой фонд:</div>
                                    <input type="text" id="money" 
                                        value={updateModalData.event_money}
                                        onChange={event => setUpdateModalData({ ...updateModalData, event_money: event.target.value })}/>
                                </div>
                                <div className="str row p-2 text-start">
                                    <div htmlFor="picture"> URL Изображения:</div>
                                    <input type="text" id="picture" 
                                        value={updateModalData.event_imageURL}
                                        onChange={event => setUpdateModalData({ ...updateModalData, event_imageURL: event.target.value })}/>
                                </div>
                            </div>
                        </div>


                        <button className="createform-button mt-5 w-15 mx-auto text-white fw-bold fs-3">Обновить данные</button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Events
import React, { } from 'react';
import axios from "axios";
import { BiX } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const AddEvent = () => {
    const navigate = useNavigate();

    async function addEvents() {
        event.preventDefault();

        const name = document.getElementById('title').value
        const info = document.getElementById('info').value
        const type = document.getElementById('type').value
        const direction = document.getElementById('titlen').value
        const skills = document.getElementById('skill').value
        const tags = document.getElementById('tags').value

        const start = document.getElementById('startdate').value
        const finish = document.getElementById('enddate').value
        const imageURL = document.getElementById('picture').value
        const stackFocus = document.getElementById('stackFocus').value
        const organizer = document.getElementById('organizer').value
        const money = document.getElementById('money').value

        await axios.post("events/createEvent", { 
                event_name: name, 
                event_info: info, 
                event_direction: direction, 
                event_tags: tags,  
                event_skills: skills, 
                event_start: start, 
                event_finish: finish, 
                event_imageURL: imageURL, 
                event_typeproject: type,
                event_organizer: organizer,
                event_stack_focus: stackFocus,
                event_money: money
            })
            .then(
                navigate('/events')
            )
            .catch(error => {
                if (error.response.data.message) alert(error.response.data.message)
                else console.log(error)
            })

    }
    return (
        <>
            <div className="event-bg">
                <div className="d-flex justify-content-end fs-1 mx-2">
                    <div className="position-absolute">
                        <Link to="/events">
                            <BiX />
                        </Link>
                    </div>
                </div>
                <div className="content-form container-fluid d-flex justify-content-center w-80e p-0">
                    <div className="row w-100 d-flex align-items-center mt-4" align="center">
                        <div className="title bg-secondary text-center p-3">
                            <strong className="text-white fs-1">Создать мероприятие</strong>
                        </div>

                        <form onSubmit={addEvents} className="forme fs-5 p-5" align="center">
                            <div className="str row p-2">
                                <label htmlFor="title">Название:</label>
                                <input type="text" id="title" />
                            </div>
                            <div className="str row p-2">
                                <label htmlFor="info">Информация о проекте:</label>
                                <input type="text" id="info" />
                            </div>
                            <div className="str row p-2">
                                <label htmlFor="type">Тип проекта:</label>
                                <select id="type">
                                    <option>&#160;</option>
                                    <option>Научный</option>
                                    <option>Коммерческий</option>
                                    <option>Учебный</option>
                                </select>
                            </div>
                            <div className="str row p-2">
                                <label htmlFor="tags">Теги:</label>
                                <input type="text" id="tags" />
                            </div>
                            <div className="str row p-2">
                                <label htmlFor="titlen">Название направления:</label>
                                <select id="titlen">
                                    <option>&#160;</option>
                                    <option>"Веб-технологии"</option>
                                    <option>"Искусственный интеллект"</option>
                                    <option>"Китайский язык"</option>
                                </select>
                            </div>
                            <div className="str row p-2">
                                <label htmlFor="skill">Навыки мероприятия:</label>
                                <select id="skill">
                                    <option>&#160;</option>
                                    <option>С++</option>
                                    <option>С#</option>
                                    <option>Python</option>
                                    <option>PHP</option>
                                </select>
                            </div>
                            <div className="str row p-2">
                                <label htmlFor="startdate">Начало проекта:</label>
                                <input type="text" id="startdate" />
                            </div>
                            <div className="str row p-2">
                                <label htmlFor="enddate">Конец проекта:</label>
                                <input type="text" id="enddate" />
                            </div>
                            <div className="str row p-2">
                                <label htmlFor="organizer">Организатор:</label>
                                <input type="text" id="organizer" />
                            </div>
                            <div className="str row p-2">
                                <label htmlFor="stackFocus">Технический фокус:</label>
                                <input type="text" id="stackFocus" />
                            </div>
                            <div className="str row p-2">
                                <label htmlFor="money">Призовой фонд:</label>
                                <input type="text" id="money" />
                            </div>
                            <div className="str row p-2">
                                <label htmlFor="picture"> URL Изображения:</label>
                                <input type="text" id="picture" />
                            </div>
                            <button className="createform-button mt-5 w-15 mx-auto text-white fw-bold fs-3">Создать</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddEvent;
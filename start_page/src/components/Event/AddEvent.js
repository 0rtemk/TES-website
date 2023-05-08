import React, { useState } from 'react';
import {AiOutlinePicture} from "react-icons/ai"

const AddEvent = () => {

    return (
        <>
        <div className="event-bg">
                <div className="content-form container-fluid d-flex justify-content-center w-80e p-0">
                    <div className="row w-100 d-flex align-items-center mt-4"  align="center">
                        <div className="title bg-secondary text-center p-3">
                            <strong className="text-white fs-1">Создать мероприятие</strong>
                        </div>

                        <form className="forme fs-5 p-5" align="center">
                            <div className="str row p-2">
                                <label for="title">Название:</label>
                                    <input type="text" id="title"/>
                            </div>
                            <div className="str row p-2">
                                <label for="info">Информация о проекте:</label>
                                    <input type="text" id="info"/>
                            </div>
                            <div className="str row p-2">
                                <label for="type">Тип проекта:</label>
                                    <select id="type">
                                        <option>&#160;</option>
                                        <option>Type 1</option>
                                        <option>Type 2</option>
                                        <option>Type 3</option>
                                    </select>
                            </div>
                            <div className="str row p-2">
                                <label for="titlen">Название направления:</label>
                                    <select id="titlen">
                                        <option>&#160;</option>
                                        <option>Name 1</option>
                                        <option>Name 2</option>
                                        <option>Name 3</option>
                                    </select>
                            </div>
                            <div className="str row p-2">
                                <label for="skill">Навыки мероприятия:</label>
                                    <select id="skill">
                                        <option>&#160;</option>
                                        <option>Skill 1</option>
                                        <option>Skill 2</option>
                                        <option>Skill 3</option>
                                        <option>Skill 4</option>
                                    </select>
                            </div>
                            <div className="str row p-2">
                                <label for="startdate">Начало проекта:</label>
                                    <input type="text" id="startdate"/>
                            </div>
                            <div className="str row p-2">
                                <label for="enddate">Конец проекта:</label>
                                    <input type="text" id="enddate"/>
                            </div>
                            <div className="str row p-2">
                                <label  for="picture">Изображение:</label>
                                    <input class="input-file" type="file"  accept="image/*" id="picture" />
                                    {/* <AiOutlinePicture /> */}
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
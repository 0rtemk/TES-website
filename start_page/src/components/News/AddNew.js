import React from 'react';
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { BiX } from "react-icons/bi";

const AddNew = () => {
    const navigate = useNavigate();

    async function addNews(event) {
        event.preventDefault();

        const name = document.getElementById('title').value
        const info = document.getElementById('info').value
        const tags = document.getElementById('tags').value

        await axios.post("news/createNews", { news_name: name, news_info: info, news_tags: tags })
            .then(
                navigate('/News')
            )
            .catch(error => {
                if (error.response.data.message) alert(error.response.data.message)
                else console.log(nessage)
            })
    }

    return (
        <>
            <div className="new-bg">
                <div className="d-flex justify-content-end fs-1 mx-2">
                    <div className="position-absolute">
                        <Link to="/News" style={{ textDecoration: "none", color: 'rgba(28, 36, 75, 0.6)' }}>
                            <BiX />
                        </Link>
                    </div>
                </div>

                <div className="content-form container-fluid d-flex justify-content-center w-80e p-0">
                    <div className="row w-100 d-flex align-items-center mt-4" >
                        <div className="title bg-secondary text-center p-3">
                            <strong className="text-white fs-1">Создать новость</strong>
                        </div>

                        <form onSubmit={addNews} className="forme fs-5 p-5" align="center">
                            <div className="str row p-2">
                                <label htmlFor="title">Название:</label>
                                <input type="text" id="title" />
                            </div>
                            <div className="str row p-2">
                                <label htmlFor="info">Текст:</label>
                                <textarea rows="8" id="info" />
                            </div>
                            <div className="str row p-2">
                                <label htmlFor="tags">Хештеги:</label>
                                <input type="text" id="tags" />
                            </div>
                            <div className="str row p-2">
                                <label htmlFor="picture">Изображение:</label>
                                <input className="new-input-file" type="file" accept="image/*" id="picture" />
                            </div>
                            <button className="new-createform-button mt-5 w-15 mx-auto text-white fw-bold fs-3">Создать</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddNew;
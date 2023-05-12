import React, { useState, useEffect } from "react";
import CreateButtonNew from "./News/CreateButtonNew";
import Can from "../ability/can";
import axios from "axios";
import { BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Events/modal.css"

const News = () => {
    const [news, setNews] = useState('');
    const [modalActive, setModalActive] = useState(false)

    const [currentName, setQurrentName] = useState('')
    const [currentInfo, setQurrentInfo] = useState('')
    const [currentTags, setQurrentTags] = useState('')

    useEffect(() => {
        getNews()
    }, [])

    async function getNews() {
        await axios.get('news/allNews')
            .then(response => {
                setNews(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    async function deleteNews(news_name) {
        await axios.post("news/deleteNews", { news_name: news_name })
            .then(
                getNews()
            )
            .catch(error => {
                console.log(error)
            })
    }

    async function updateNews() {
        event.preventDefault()
        setModalActive(false)

        await axios.post("news/updateNews", { news_name: currentName, news_info: currentInfo, news_tags: currentTags })
            .then(
                getNews()
            )
            .catch(error => {
                console.log(error)
            })
    }

    const openModal = (name) => {
        setModalActive(true)

        setQurrentName(name)
        setQurrentInfo(document.getElementById(`${name}.info`).innerHTML)
        setQurrentTags(document.getElementById(`${name}.tags`).innerHTML)

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

    const getTags = (tags) => {
        let str = ""
        for (let tag in tags) str += `${tags[tag]} `
        return str
    }

    return (
        <>
            <div className="new-bg">

                <div className="d-flex justify-content-end fs-1 mx-2">
                    <div className="position-absolute">
                        <Link to="/" style={{ textDecoration: "none", color: 'rgba(28, 36, 75, 0.6)' }}>
                            <BiX />
                        </Link>
                    </div>
                </div>
                <div className="new-content container-fluid d-flex justify-content-center w-80e p-0">
                    <div className="row w-100 d-flex align-items-center mt-5 mb-5">
                        <div className="new-title col text-center p-3">
                            <strong className="text-white fs-1">Новости</strong>
                        </div>
                        <div className="new-cont mx-auto m-0 mt-3" align="center">
                            {
                                news && news.map((currentNews) =>
                                    <div className="col mt-2">
                                        <div className="new-card row p-2">
                                            <div className="new-card-body col">
                                                <div className="col new-card-dict text-black p-2">
                                                    <p className="fs-5" align="center">{currentNews.news_name}</p>
                                                    <p className="pe " id={`${currentNews.news_name}.info`}>{currentNews.news_info}</p>
                                                    <p className="pe " id={`${currentNews.news_name}.tags`}>{getTags(currentNews.news_tags)}</p>
                                                    <p className="pe ">{getDate(currentNews.news_date)}</p>
                                                </div>
                                            </div>
                                            <div className="col new-card-img m-2" align="center">
                                                <img className="card-img" alt=""></img>
                                            </div>
                                            <Can I='publish' a='news'>
                                                <div className="text-center">
                                                    <button className="btn btn-danger mx-3" value={currentNews.news_name} onClick={event => deleteNews(event.target.value)}>Удалить новость</button>
                                                    <button className="btn btn-primary mx-3" onClick={() => openModal(currentNews.news_name)}>Редактировать новость</button>
                                                </div>
                                            </Can>
                                        </div>
                                    </div>
                                )
                            }
                            <Can I='publish' a='news'>
                                <CreateButtonNew />
                            </Can>
                        </div>
                    </div>
                </div>
            </div>
            <div className={modalActive ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
                <div className={modalActive ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                    <div className="container d-flex justify-content-center">
                        <div className="row d-flex align-items-center">
                            <form onSubmit={updateNews} className="forme fs-5 p-5" align="center">
                                <div className="str row p-2">
                                    <label htmlFor="titleModal">Название:</label>
                                    <input type="text" id="titleModal" readonly value={currentName} />
                                </div>
                                <div className="str row p-2">
                                    <label htmlFor="infoModal">Текст:</label>
                                    <textarea rows="8" id="infoModal" onChange={event => setQurrentInfo(event.target.value)} value={currentInfo} />
                                </div>
                                <div className="str row p-2">
                                    <label htmlFor="tagsModal">Хештеги:</label>
                                    <input type="text" id="tagsModal" onChange={event => setQurrentTags(event.target.value)} value={currentTags} />
                                </div>
                                <div className="str row p-2">
                                    <label htmlFor="picture">Изображение:</label>
                                    <input className="new-input-file" type="file" accept="image/*" id="picture" />
                                </div>
                                <button className="new-createform-button mt-5 w-15 mx-auto text-white fw-bold fs-3">Обновить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default News
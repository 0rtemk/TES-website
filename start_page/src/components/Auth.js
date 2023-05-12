import React, { useState, useEffect } from "react";
import { BiX } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import Cookies from 'universal-cookie';
import CryptoJS from "crypto-js";
import { buildAbilityFor } from '../ability/caslAbility';

const Auth = () => {
    const secretPass = "XkhZG4fW2t2W"; //Перенести в .env
    const navigate = useNavigate();
    const cookies = new Cookies();

    useEffect(() => {
        if (cookies.get('cryptData')) return navigate('/');
    }, [navigate]);

    async function getData() {
        await axios.post("auth/login", { login: log, password: pass })
            .then(response => {
                const cryptData = CryptoJS.AES.encrypt(
                    JSON.stringify({
                        'role': response.data.role.toLocaleLowerCase(), 
                        'token': response.data.token
                    }),
                    secretPass
                ).toString();

                const data = {
                    'email': response.data.email,
                    'fullname': response.data.fullname,
                    'login': response.data.login,
                    'phone': response.data.phone,
                    'projects': response.data.projects
                }
                cookies.set('cryptData', cryptData, { path: '/' })
                cookies.set('data', data, { path: '/' })
                buildAbilityFor(response.data.role.toLocaleLowerCase())

                window.location.reload(navigate('/')); //replace this later, navifate to student LK
            })
            .catch(error => {
                if(error.response.data.message) setErrorMessage(error.response.data.message)
                else console.log(error)
            })
    }

    const [log, setLogin] = useState('');
    const [pass, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        setErrorMessage('')
        await getData(log, pass);

        setLogin('');
        setPassword('');
    };


    return (
        <>
            <div className="auth-bg">
                <div className="auth-card">
                    <div className="d-flex justify-content-end fs-1 mx-2">
                        <Link to="/" style={{ textDecoration: "none", color: 'rgba(28, 36, 75, 0.6)' }}>
                            <BiX />
                        </Link>
                    </div>
                    <form onSubmit={handleSubmit} className="container">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="col-12 col-md-8">
                                <div className="mb-md-5">
                                    <div className="fw-bold text-white text-center text-decoration-underline fs-2 pb-5">Вход в систему</div>
                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label fs-5 text-white" htmlFor="typeEmailX">Логин</label>
                                        <input type="text" id="typeEmailX" onChange={event => setLogin(event.target.value)} value={log} className="form-control form-control-lg" placeholder="Введите логин" />
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label fs-5 text-white" htmlFor="typePasswordX">Пароль</label>
                                        <input type="password" id="typePasswordX" onChange={event => setPassword(event.target.value)} value={pass} className="form-control form-control-lg" placeholder="Введите пароль" />
                                    </div>
                                    <div className="form-check pb-5">
                                        <input type="checkbox" className="form-check-input" id="remrmberMe" />
                                        <label className="form-check-label text-white fs-5" htmlFor="remrmberMe">запомнить меня</label>
                                    </div>
                                    <div className="text-center text-danger mb-2">{errorMessage}</div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button className="btn-auth px-5" type="submit">Войти</button>
                                    </div>
                                    <p className="small mb-5 pb-lg-2 text-center"><a className="text-white-50" href="#!">не помню пароль</a></p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Auth
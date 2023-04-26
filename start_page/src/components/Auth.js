import React, {useState} from "react";
import { BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios"

const Auth = () => {
    async function getData() {
        const res = await axios.post("http://localhost:3000/auth/login", {login: log, password: pass});
        if (res.data.accessToken){
            console.log(res.data)
            localStorage.setItem("token", JSON.stringify(res.data));
        }
    }

    
    const [log, setLogin] = useState('');
    const [pass, setPassword] = useState('');
    
    const handleSubmit = event => {
        getData(log, pass);

        console.log('Oke');
        event.preventDefault(); //prevent page refresh
  
        //clear all input values in the form
        setLogin('');
        setPassword('');
    };

    
    return (
        <>
            <div className="auth-bg">
                <div className="auth-card">
                    <div className="d-flex justify-content-end fs-1 mx-2">
                        <Link to="/" style={{textDecoration: "none", color: 'rgba(28, 36, 75, 0.6)'}}>
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
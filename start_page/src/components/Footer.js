import React from "react"

import Gyd from "../img/Partners/GYD.png"
import Msk from "../img/Partners/MSK.png"
import Nti from "../img/Partners/NTI.png"
import Oe3 from "../img/Partners/OE3.png"
import Oe3_Cg from "../img/Partners/OE3_CG.png"
import Oiyai from "../img/Partners/OIYaI.png"
import Skolk from "../img/Partners/Skolkovo.png"
import Vk from "../img/VK.png"

const Footer = () => {

    return (
        <>
            <footer>
                <div className="title-footer text-black text-center py-5">
                    <div className="fs-1"><strong>Партнеры</strong></div>
                </div>

                <div className="container-fluid d-flex justify-content-center">
                    <div className="row d-flex align-items-center">
                        <div className="col p-0" align="center">
                            <div className="pat">
                                <a href="/#"><img className="w-img w-70p" src={Nti} alt=""></img></a>
                            </div>
                        </div>
                        <div className="col p-0" align="center"> 
                            <div className="pat">
                                <a href="/#"><img className="w-img w-70p" src={Gyd} alt=""></img></a>
                            </div>
                        </div>
                        <div className="col p-0" align="center"> 
                            <div className="pat">
                                <a href="/#"><img className="w-img w-70p" src={Oe3} alt=""></img></a>
                            </div>
                        </div>
                        <div className="col p-0" align="center"> 
                            <div className="pat">
                                <a href="/#"><img className="w-img w-70p" src={Skolk} alt=""></img></a>
                            </div>
                        </div>
                        <div className="col p-0" align="center"> 
                            <div className="pat">
                                <a href="/#"><img className="w-img w-70p" src={Oiyai} alt=""></img></a>
                            </div>
                        </div>
                        <div className="col p-0" align="center"> 
                            <div className="pat">
                                <a href="/#"><img className="w-img w-70p" src={Msk} alt=""></img></a>
                            </div>
                        </div>
                        <div className="col p-0" align="center"> 
                            <div className="pat">
                                <a href="/#"><img className="w-img w-70p" src={Oe3_Cg} alt=""></img></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contacts py-3">
                    <div className="row d-flex align-items-center">
                        <div className="vk" align="center">
                            <a href="/#">
                                <img src={Vk} alt="Vk" width="55px" height="40px"></img>
                            </a>
                        </div>
                        <div className="text-black text-center py-2">
                            <div className="fs-3">E-mail: stp@uni-dubna.ru</div>
                            <div className="fs-5">Адрес: 141982, Московская обл., г. Дубна, ул. Университетская, д. 19, Государственный университет «Дубна»</div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
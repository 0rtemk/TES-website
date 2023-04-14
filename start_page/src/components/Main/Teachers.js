import React from "react";

import Zhivetyev_AV from "../../img/Teachers/Zhivetyev_AV.png"
import Paul_AE from "../../img/Teachers/Paul_AE.png"
import Lishilin_MV from "../../img/Teachers/Lishilin_MV.png"
import Roshkova_OV from "../../img/Teachers/Roshkova_OV.png"
import Shadrov_KN from "../../img/Teachers/Shadrov_KN.png"
import Tremasova_AV from "../../img/Teachers/Tremasova_AV.png"
import Nikitin_VM from "../../img/Teachers/Nikitin_VM.png"
import Korolev_SU from "../../img/Teachers/Korolev_SU.png"
import Ribachuk_MA from "../../img/Teachers/Ribachuk_MA.png"

const Teachers = () => {
    return (
        <>
            <section name="Teachers" className="bg-green py-5">
                <div className="fs-1"><strong>Преподаватели</strong></div>
                <div className="container bg-green padding-section">
                    <div className="row">
                        <div className="col" align="center">
                            <div className="card">
                                <img className="card-img-top w-img w-70p" src={Zhivetyev_AV} alt=""></img>
                                <div className="card-body">
                                    <div className="card-title fs-3 lh-1 py-2">Живетьев Александр Викторович</div>
                                    <div className="card-subtitle fs-5 text-muted">Предпринимательство и малый бизнес</div>
                                </div>
                            </div>
                        </div>

                        <div className="col" align="center">
                            <div className="card">
                                <img className="card-img-top w-img w-70p" src={Paul_AE} alt=""></img>
                                <div className="card-body">
                                    <div className="card-title fs-3 lh-1 py-2">Пауль Александр Евгеньевич</div>
                                    <div className="card-subtitle fs-5 text-muted">Гибкая разработка</div>
                                </div>
                            </div>
                        </div>

                        <div className="col" align="center">
                            <div className="card">
                                <img className="card-img-top w-img w-70p" src={Lishilin_MV} alt=""></img>
                                <div className="card-body">
                                    <div className="card-title fs-3 lh-1 py-2">Лишилин Михаил Владимирович</div>
                                    <div className="card-subtitle fs-5 text-muted">Проектные часы</div>
                                </div>
                            </div>
                        </div>

                        <div className="col" align="center">
                            <div className="card">
                                <img className="card-img-top w-img w-70p" src={Roshkova_OV} alt=""></img>
                                <div className="card-body">
                                    <div className="card-title fs-3 lh-1 py-2">Рожкова Ольга Владимировна</div>
                                    <div className="card-subtitle fs-5 text-muted">Методы генерации идей</div>
                                </div>
                            </div>
                        </div>

                        <div className="col" align="center">
                            <div className="card">
                                <img className="card-img-top w-img w-70p" src={Shadrov_KN} alt=""></img>
                                <div className="card-body">
                                    <div className="card-title fs-3 lh-1 py-2">Шадров Константин Николаевич</div>
                                    <div className="card-subtitle fs-5 text-muted">Формирование команды инновационного проекта: деловая игра</div>
                                </div>
                            </div>
                        </div>

                        <div className="col" align="center">
                            <div className="card">
                                <img className="card-img-top w-img w-70p" src={Tremasova_AV} alt=""></img>
                                <div className="card-body">
                                    <div className="card-title fs-3 lh-1 py-2">Тремасова Анастасия Владимировна</div>
                                    <div className="card-subtitle fs-5 text-muted">Маркетинг</div>
                                </div>
                            </div>
                        </div>

                        <div className="col" align="center">
                            <div className="card">
                                <img className="card-img-top w-img w-70p" src={Nikitin_VM} alt=""></img>
                                <div className="card-body">
                                    <div className="card-title fs-3 lh-1 py-2">Никитин Виктор Максимович</div>
                                    <div className="card-subtitle fs-5 text-muted">Привлечение инвестиций</div>
                                </div>
                            </div>
                        </div>

                        <div className="col" align="center">
                            <div className="card">
                                <img className="card-img-top w-img w-70p" src={Korolev_SU} alt=""></img>
                                <div className="card-body">
                                    <div className="card-title fs-3 lh-1 py-2">Королев Сергей Юрьевич</div>
                                    <div className="card-subtitle fs-5 text-muted">Организация продаж</div>
                                </div>
                            </div>
                        </div>

                        <div className="col" align="center">
                            <div className="card">
                                <img className="card-img-top w-img w-70p" src={Ribachuk_MA} alt=""></img>
                                <div className="card-body">
                                    <div className="card-title fs-3 lh-1 py-2">Рыбачук Максим Александрович</div>
                                    <div className="card-subtitle fs-5 text-muted">Создание бизнес-модели технологического стартапа</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Teachers
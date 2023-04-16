import React from "react"

import checked from "../../img/checked.png"

const Mission = () => {
    return (
        <>
            <section name="Mission" id="Mission" className="bg-green py-5">
                <div className="fs-1"><strong>Миссия школы</strong></div>
                <div className="fs-2 py-2">Подготовка технолидеров</div>
                <div className="mission padding-section">
                    <div className="row section-check text-start">
                        <div className="row py-4">
                            <div className="col-1">
                                <img src={checked} alt="" className="w-img w-40"></img>
                            </div>
                            <div className="col-11">
                                <div className="fs-3 py-2 lh-1"><strong>Вовлечение в технологическое предпринимательство</strong></div>
                                <div className="fs-5">Помощь молодым талантам в получении прибыли от реализации инженерно-технических идей, знакомство участников с площадками резидентов ОЭЗ «Дубна»</div>
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-1">
                                <img src={checked} alt="" className="w-img w-40"></img>
                            </div>
                            <div className="col-11">
                                <div className="fs-3 py-2 lh-1"><strong>Удовлетворение кадровой потребности резидентов ОЭЗ «Дубна» и научно-производственного комплекса города</strong></div>
                                <div className="fs-5">Возможность поработать с действующими предприятиями и решить реальные задачи</div>
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-1">
                                <img src={checked} alt="" className="w-img w-40"></img>
                            </div>
                            <div className="col-11">
                                <div className="fs-3 py-2 lh-1"><strong>Образование</strong></div>
                                <div className="fs-5">Навыки управления проектами</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mission
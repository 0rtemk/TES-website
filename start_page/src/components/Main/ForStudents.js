import React from "react"

import fs_1 from "../../img/forStudents/fs_1.png"
import fs_2 from "../../img/forStudents/fs_2.png"
import fs_3 from "../../img/forStudents/fs_3.png"
import fs_4 from "../../img/forStudents/fs_4.png"
import fs_5 from "../../img/forStudents/fs_5.png"

const ForStudents = () => {
    return (
        <>
            <section name="ForStudents" id="ForStudents" className="py-5">
                <div className="fs-1"><strong>Что получает участник</strong></div>
                <div className="mission padding-section">
                    <div className="row section-check text-start">
                        <div className="row py-4">
                            <div className="col-2" align="center">
                                <img src={fs_1} alt="" className="w-img w-80"></img>
                            </div>
                            <div className="col-10">
                                <div className="fs-3 py-2 lh-1"><strong>Готовый к реализации стартап</strong></div>
                                <div className="fs-5">После прохождения всех этапов обучения – готовый бизнес-проект для представления инвесторам</div>
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-2" align="center">
                                <img src={fs_2} alt="" className="w-img w-80"></img>
                            </div>
                            <div className="col-10">
                                <div className="fs-3 py-2 lh-1"><strong>Взаимодействие с резидентами ОЭЗ «Дубна»</strong></div>
                                <div className="fs-5">Участник получит возможность найти работу у резидентов ОЭЗ «Дубна» и предприятий научно-производственного комплекса города</div>
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-2" align="center">
                                <img src={fs_3} alt="" className="w-img w-80"></img>
                            </div>
                            <div className="col-10">
                                <div className="fs-3 py-2 lh-1"><strong>Денежные средства на начальный этап реализации проекта</strong></div>
                                <div className="fs-5">Победителям Хакатона «Цифра.zоne | Технологическая модернизация» 2.0 предоставляется денежный приз</div>
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-2" align="center">
                                <img src={fs_4} alt="" className="w-img w-60"></img>
                            </div>
                            <div className="col-10">
                                <div className="fs-3 py-2 lh-1"><strong>Сертификаты об обучении Университета «Дубна» и Сколково</strong></div>
                                <div className="fs-5">После каждого курса обучения участникам предоставляются сертификаты о прохождении обучения</div>
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-2" align="center">
                                <img src={fs_5} alt="" className="w-img w-80"></img>
                            </div>
                            <div className="col-10">
                                <div className="fs-3 py-2 lh-1"><strong>Диплом о профессиональной переподготовке «Менеджмент в области управления проектами»</strong></div>
                                <div className="fs-5">При успешном освоении всех модулей программы</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForStudents
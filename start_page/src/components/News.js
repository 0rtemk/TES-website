import React, {  } from "react";
import CreateButtonNew from "./News/CreateButtonNew";

const News = () => {

    return (
        <>
            <div className="new-bg">
                <div className="new-content container-fluid d-flex justify-content-center w-80e p-0">
                    <div className="row w-100 d-flex align-items-center mt-5 mb-5">
                        <div className="new-title col text-center p-3">
                            <strong className="text-white fs-1">Новости</strong>
                        </div>
                        <div className="new-cont mx-auto m-0 mt-3" align="center">
                            <div className="col mt-2">
                                <div className="new-card row p-2">
                                    <div className="new-card-body col">
                                        <div className="col new-card-dict text-black p-2">
                                            <p className="fs-5" align="center">Название новости</p>
                                            <p className="pe ">It is a long established fact that a reader will be distracted 
                                                by the readable content of a page when looking at its layout. 
                                                The point of using Lorem Ipsum is that it has a more-or-less 
                                                normal distribution of letters, as opposed to using 'Content 
                                                here, content here', making it look like readable English. 
                                                Many desktop publishing packages and web page editors now 
                                                use Lorem Ipsum as their default model text, and a search 
                                                for 'lorem ipsum' will uncover many web sites still in their 
                                                infancy. Various versions have evolved over the years, 
                                                sometimes by accident, sometimes on purpose (injected 
                                                humour and the like). There are many variations of passages 
                                                of Lorem Ipsum available, but the majority have suffered 
                                                alteration in some form, by injected humour, or randomised 
                                                words which don't look even slightly believable. If you are 
                                                going to use a passage of Lorem Ipsum</p>
                                            <p className="pe ">#dfiudfi #dfhdisiof #dsiofodis #dsiofuoidsfoi</p>
                                            <p className="pe ">16/04/2023</p>
                                        </div>
                                    </div>
                                    <div className="col new-card-img m-2" align="center">
                                        <img className="card-img" alt=""></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col mt-4">
                                <div className="new-card row p-2">
                                    <div className="new-card-body col">
                                        <div className="col new-card-dict text-black p-2">
                                            <p className="fs-5" align="center">Название новости</p>
                                            <p className="pe ">It is a long established fact that a reader will be distracted 
                                                by the readable content of a page when looking at its layout. 
                                                The point of using Lorem Ipsum is that it has a more-or-less 
                                                normal distribution of letters, as opposed to using 'Content 
                                                here, content here', making it look like readable English. 
                                                Many desktop publishing packages and web page editors now 
                                                use Lorem Ipsum as their default model text, and a search 
                                                for 'lorem ipsum' will uncover many web sites still in their 
                                                infancy. Various versions have evolved over the years, 
                                                sometimes by accident, sometimes on purpose (injected 
                                                humour and the like). There are many variations of passages 
                                                of Lorem Ipsum available, but the majority have suffered 
                                                alteration in some form, by injected humour, or randomised 
                                                words which don't look even slightly believable. If you are 
                                                going to use a passage of Lorem Ipsum</p>
                                            <p className="pe ">#dfiudfi #dfhdisiof #dsiofodis #dsiofuoidsfoi</p>
                                            <p className="pe ">16/04/2023</p>
                                        </div>
                                    </div>
                                    <div className="col new-card-img m-2" align="center">
                                        <img className="card-img" alt=""></img>
                                    </div>
                                </div>
                            </div>
                            <CreateButtonNew />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default News
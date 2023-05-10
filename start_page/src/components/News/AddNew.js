import React, {  } from 'react';

const AddNew = () => {

    return (
        <>
        <div className="new-bg">
                <div className="content-form container-fluid d-flex justify-content-center w-80e p-0">
                    <div className="row w-100 d-flex align-items-center mt-4" >
                        <div className="title bg-secondary text-center p-3">
                            <strong className="text-white fs-1">Создать мероприятие</strong>
                        </div>

                        <form className="forme fs-5 p-5" align="center">
                            <div className="str row p-2">
                                <label for="title">Название:</label>
                                    <input type="text" id="title"/>
                            </div>
                            <div className="str row p-2">
                                <label for="info">Текст:</label>
                                    <textarea rows="8" id="info"/>
                            </div>
                            <div className="str row p-2">
                                <label for="info">Хештеги:</label>
                                    <input type="text" id="info"/>
                            </div>
                            <div className="str row p-2">
                                <label  for="picture">Изображение:</label>
                                    <input className="new-input-file" type="file"  accept="image/*" id="picture" />
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
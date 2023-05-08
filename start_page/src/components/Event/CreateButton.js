import React, { useState } from 'react';
import { Link } from "react-router-dom";

const CreateButton = () => {
    
    return (
        <> 
            <Link to="/addevent" style={{ textDecoration: "none"}}>
                <div className="create-button fixed-bottom w-25 mx-auto p-1">
                    <strong className="text-white fs-3">Создать мероприятие</strong>
                </div>
            </Link>
        </>
    );
}

export default CreateButton;

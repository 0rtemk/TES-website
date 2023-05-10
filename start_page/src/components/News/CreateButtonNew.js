import React, {  } from 'react';
import { Link } from "react-router-dom";

const CreateButtonNew = () => {
    
    return (
        <> 
            <Link to="/addnew" style={{ textDecoration: "none"}}>
                <div className="new-create-button fixed-bottom w-25 mx-auto p-1">
                    <strong className="text-white fs-3">Создать новость</strong>
                </div>
            </Link>
        </>
    );
}

export default CreateButtonNew;

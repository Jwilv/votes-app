import React, { useState } from "react";

export const BandAdd = ({addBand}) => {

const [valueInput, setValueInput] = useState('')

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(valueInput.trim().length > 0){
            addBand(valueInput);
        }
        setValueInput('');
    }
    return (
        <>
            <h3>Agregar banda</h3>

            <form onSubmit={handleSubmit}>
                <input 
                className="form-control"
                placeholder="Nombre"
                value={valueInput}
                onChange={(event)=>setValueInput(event.target.value)}
                />
            </form>
        </>
    )
}
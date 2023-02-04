import React, { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";

export const BandAdd = () => {

const [valueInput, setValueInput] = useState('')

const {socket} = useContext(SocketContext)

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(valueInput.trim().length > 0){
            socket.emit('add-band',{name : valueInput})
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
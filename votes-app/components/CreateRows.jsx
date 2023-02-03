import React from "react"



export const CreateRows = ({data}) => {

    const changeBands = (event, id)=>{
        const newName = event.target.value;
        data.map( band =>{
            if(band.id === id){
                band.name = newName;
            }
        })
    }
    return (
        <tr>
            <td>
                <button className="btn btn-primary">+1</button>
            </td>
            <td>
                <input 
                className="form-control"
                value={data.name}
                onChange={ ()=> changeBands(event,data.id)}
                />
            </td>
            <td>
                <h3>{data.votes}</h3>
            </td>
            <td>
                <button className="btn btn-danger">
                    Borrar
                </button>
            </td>
        </tr>
    )
}
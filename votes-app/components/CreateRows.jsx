import React from "react"



export const CreateRows = () => {
    return (
        <tr>
            <td>
                <button className="btn btn-primary">+1</button>
            </td>
            <td>
                <input className="form-control" />
            </td>
            <td>
                <h3>5</h3>
            </td>
            <td>
                <button className="btn btn-danger">
                    Borrar
                </button>
            </td>
        </tr>
    )
}
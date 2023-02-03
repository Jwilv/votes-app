import React from "react";

export const BandList = () => {

    const createRows = () => {
        return (
            <tr>
                <td>
                    <button className="btn btn-primary">+1</button>
                </td>
                <td>
                    <input className="form-control" />
                </td>
                <td>Votos</td>
                <td>Borrar</td>
            </tr>
        )
    }


    return (
        <>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                    <tbody>

                    </tbody>
                </thead>
            </table>
        </>
    )
}
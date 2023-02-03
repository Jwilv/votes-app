import React from "react";
import { CreateRows } from "./CreateRows";

export const BandList = () => {


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
                        <CreateRows />
                    </tbody>
                </thead>
            </table>
        </>
    )
}
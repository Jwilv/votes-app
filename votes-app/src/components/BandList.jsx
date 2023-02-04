import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
//import { CreateRows } from "./CreateRows";

export const BandList = () => {

    const [bands, setBands] = useState([]);

    const { socket } = useContext(SocketContext)

    useEffect(() => {
        socket.on('current-bands', (bands) => {
            setBands(bands)
        })

        return () => {
            return socket.off('current-bands')
        }
    }, [socket])


    const votar = (id) => {
        socket.emit('votar-band', id)
    }

    const deleteBand = (id) => {
        socket.emit('delete-band', id)
    }

    const changeName = (id, name) => {
        socket.emit('change-name', { id, name })
    }

    const changeBands = (event, id) => {
        const newName = event.target.value;
        setBands(data.map(band => {
            if (band.id === id) {
                band.name = newName;
            }
            return band
        }))
    }

    const notFocus = (id, name) => {
        changeName(id, name)
    }

    const CreateRows = () => {
        return (
            bands.map(band => (
                <tr key={band.id}>
                    <td>
                        <button
                            className="btn btn-primary"
                            onClick={() => votar(band.id)}
                        >+1</button>
                    </td>
                    <td>
                        <input
                            className="form-control"
                            value={band.name}
                            onChange={() => changeBands(event, band.id)}
                            onBlur={() => notFocus(band.id, band.name)}
                        />
                    </td>
                    <td>
                        <h3>{band.votes}</h3>
                    </td>
                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => deleteBand(band.id)}
                        >
                            Borrar
                        </button>
                    </td>
                </tr>
            ))
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
                </thead>
                <tbody>
                    {
                        CreateRows()
                    }
                </tbody>
            </table>
        </>
    )
}
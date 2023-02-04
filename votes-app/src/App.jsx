import React, { useEffect, useState } from "react"
import { BandAdd } from "../components/BandAdd"
import { BandList } from "../components/BandList"
import { useSocket } from "../hooks/useSocket"


export const App = () => {


  const [bands, setBands] = useState([])

  const {socket,online} = useSocket('http://localhost:5050')

  useEffect(() => {
    socket.on('current-bands', (bands) => {
      setBands(bands)
    })
  }, [socket])

  const votar = (id) => {
    socket.emit('votar-band', id)
  }

  const deleteBand = (id)=>{
    socket.emit('delete-band', id)
  }

  const changeName = (id, name)=>{
    socket.emit('change-name',{id, name})
  }

  const addBand = (name)=>{
    socket.emit('add-band',{name})
  }
  

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status:
          {
            online
              ? <span className="text-success"> online</span>
              : <span className="text-danger"> offline</span>
          }
        </p>
      </div>

      <h1>Band Names</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <BandList
            data={bands}
            votar={votar}
            clear={deleteBand}
            cambiar={changeName}
          />
        </div>
        <div className="col-4">
          <BandAdd
          addBand={addBand} />
        </div>
      </div>

    </div>
  )
}

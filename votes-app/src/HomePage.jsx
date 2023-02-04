import React, { useContext } from "react"
import { BandAdd } from "./components/BandAdd"
import { BandList } from "./components/BandList"
import { SocketContext } from "./context/SocketContext"


export const HomePage = () => {


  // const [bands, setBands] = useState([])

  const { online } = useContext(SocketContext);

  // useEffect(() => {
  //   socket.on('current-bands', (bands) => {
  //     setBands(bands)
  //   })
  // }, [socket])

  // const votar = (id) => {
  //   socket.emit('votar-band', id)
  // }

  // const deleteBand = (id)=>{
  //   socket.emit('delete-band', id)
  // }

  // const changeName = (id, name)=>{
  //   socket.emit('change-name',{id, name})
  // }

  // const addBand = (name)=>{
  //   socket.emit('add-band',{name})
  // }


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
          <BandList />
        </div>
        <div className="col-4">
          <BandAdd />
        </div>
      </div>

    </div>
  )
}

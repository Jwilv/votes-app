import React from "react"
import { BandAdd } from "../components/BandAdd"
import { BandList } from "../components/BandList"


export const App = ()=>{
return (
  <div className="container">
    <div className="alert">
      <p>
        Service status:
        <span className="text-success"> online</span>
        <span className="text-danger"> offline</span>
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

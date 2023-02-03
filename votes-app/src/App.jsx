import React from "react"


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
    Band List
  </div>
  <div className="col-8">
    Band Add
  </div>
</div>

  </div>
)
}

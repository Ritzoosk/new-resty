import React from "react";

class History extends React.Component{
  render(){
    return(
      <>
      <h1>History</h1>
      {
        this.props.history.map((item, i)=>
        <li onClick={()=>this.props.clickedHistory(item)}  key={i}>{item.method} {item.url}</li>
        )
      }
      </>
    

    )}
}

export default History;
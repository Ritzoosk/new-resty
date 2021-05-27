import React from "react";

class History extends React.Component{
  render(){
    return(
      <>
      {
        this.props.history.map((item, i)=>
        <li key={i}>{item.name}</li>
        )
      }
      </>
    

    )}
}

export default History;
import React from "react";
import superagent from "superagent";


class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      urlInput: "",
      method: ""
    }
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRestButtons = this.handleRestButtons.bind(this);

  }


  //Changes Classes States
  updateState(event){
    this.setState({[event.target.name]:event.target.value})
  }

  

  async handleSubmit(event){
    event.preventDefault();

    const agentCall = await superagent[this.state.method](this.state.urlInput)
    //console.log(agentCall);
    this.props.addResult({method: this.state.method, url: this.state.urlInput})
  }

  handleRestButtons(e, method){
    e.preventDefault();
    this.setState({method: method})

  }


  render() {
    return (
      <>
      <form onSubmit= {this.handleSubmit}>
        <input name="urlInput" value = {this.state.urlInput} onChange = {this.updateState}></input>
        <button onClick={(e)=>this.handleRestButtons(e, "get")}>GET</button>
        <button onClick={(e)=>this.handleRestButtons(e, "post")}>POST</button>
        <button onClick={(e)=>this.handleRestButtons(e, "update")}>UPDATE</button>
        <button onClick={(e)=>this.handleRestButtons(e, "delete")}>DELETE</button>


        <button type= "submit">Hit That Route!</button>

        

      </form>
      </>
    )
  }
}

export default Form;

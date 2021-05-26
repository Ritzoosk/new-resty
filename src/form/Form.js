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

  }

  updateState(event){
    this.setState({[event.target.name]:event.target.value})
  }

  

  async handleSubmit(event){
    event.preventDefault();
    const agentCall = await superagent.get(this.state.urlInput)
    console.log(agentCall);
    this.props.addResult(agentCall.body)
  }

  render() {
    return (
      <>
      <form onSubmit= {this.handleSubmit}>
        <input name="urlInput" value = {this.state.urlInput} onChange = {this.updateState}></input>
        <button type= "submit">Hit That Route!</button>

      </form>
      </>
    )
  }
}

export default Form;

import React from "react";
import superagent from "superagent";


class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      results: []
    }
    // this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRestButtons = this.handleRestButtons.bind(this);

  }
  // //Changes Classes States
  // updateState(event){
  //   this.setState({[event.target.name]:event.target.value})
  // }
  async handleSubmit(event){
    event.preventDefault();

    const agentCall = await superagent[this.props.method](this.props.urlInput)
    console.log(agentCall);
    this.props.addResult({method: this.props.method, url: this.props.urlInput})
    this.setState({results: agentCall.body.results})
  }

  handleRestButtons(e, method){
    e.preventDefault();
    e.target.value = method;
    this.props.updateState(e)

  }


  render() {
    console.log(this.state.results)
    return (
      <>
      <form onSubmit= {this.handleSubmit}>
        <input name="urlInput" value = {this.props.urlInput} onChange = {this.props.updateState}></input>
        <button onClick={(e)=>this.handleRestButtons(e, "get")}>GET</button>
        <button onClick={(e)=>this.handleRestButtons(e, "post")}>POST</button>
        <button onClick={(e)=>this.handleRestButtons(e, "update")}>UPDATE</button>
        <button onClick={(e)=>this.handleRestButtons(e, "delete")}>DELETE</button>

        <button type= "submit">Hit That Route!</button>
      </form>
      {this.state.results.map((result)=><li>{result.name}</li>)}
      </>
    )
  }
}

export default Form;

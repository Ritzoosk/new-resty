import React from "react";
import Form from "./form/Form.js";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      results: []
    }
  }

  updateState(event){
    this.setState({[event.target.name]:event.target.value})
  }

  addResult(result){
    this.setState({results:[...this.state.results, result]})
  }

  render() {
    return (
      <div className="App">
        <h1>Its still working</h1>
        <Form addResult={this.addResult}/>
        
      </div>
    )
  }
}

export default App;

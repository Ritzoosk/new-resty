import React from 'react';
import Form from "./form/Form.js"
import History from "./history/History.js"
import Results from './results/Results.js'

class Home extends React.Component {
  constructor(props){
        super(props)
        this.state = {
          count: 0,
          history: []
        }
        this.updateState = this.updateState.bind(this);
        this.addResult = this.addResult.bind(this);
    
      }
    
      updateState(event){
        this.setState({[event.target.name]:event.target.value})
      }
    
      addResult(results){
        this.setState({history:results})
      }
    
      render() {
        return (
          <div className="App">
            <h1>Home</h1>
            <Form addResult={this.addResult}/>
            <History history={this.state.history}/>
          </div>
        )
      }
}

export default Home;
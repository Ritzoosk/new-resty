import React from 'react';
import Form from "./form/Form.js"
import History from "./history/History.js"
import Results from './results/Results.js'

class Home extends React.Component {

    
      render() {
        return (
          <div className="App">
            <h1>Home</h1>
            <Form addResult={this.props.addResult}/>
          </div>
        )
      }
}

export default Home;
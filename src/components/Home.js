import React from 'react';
import Form from "./form/Form.js"
import History from "./history/History.js"
import Results from './results/Results.js'

const Home = (props)=> {

    
        return (
          <div className="App">
            <h1>Home</h1>
            <Form addResult={props.addResult} updateState={props.updateState} urlInput={props.urlInput} method= {props.method} />
          </div>
        )
}

export default Home;
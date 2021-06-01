import React from 'react';
import { Route, Switch } from 'react-router-dom';

import History from './history/History.js';
import Home from './Home.js';
import Help from './Help.js';


class Main extends React.Component {
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
    this.setState({history:[results,...this.state.history]})
  }

  render(){
  // let items = ['pencil', 'fish', 'cookie', 'box', 'shirt', 'great', 'snail'];
  // let listItems = items.map((item, i) => {
  //   return <li key={i}>{item}</li>
  // })

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home addResult={this.addResult} history={this.state.history} />
        </Route>
        <Route exact path="/history">
          <History history={this.state.history}/>
        </Route>
        <Route path="/help">
            <Help/>
        </Route>
      </Switch>
    </main>
  )
  }
}

export default Main;
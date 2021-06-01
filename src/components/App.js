import React from "react";
import { BrowserRouter } from 'react-router-dom'
import Header from './Header.js'
import Main from './Main.js'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}


































// Class based//


// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       count: 0,
//       history: []
//     }
//     this.updateState = this.updateState.bind(this);
//     this.addResult = this.addResult.bind(this);

//   }

//   updateState(event){
//     this.setState({[event.target.name]:event.target.value})
//   }

//   addResult(results){
//     this.setState({history:results})
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>RESTy</h1>
//         <Form addResult={this.addResult}/>
//         <History history={this.state.history}/>
//       </div>
//     )
//   }
// }

 export default App;

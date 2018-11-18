import React, {
  Component
} from 'react';

//import Intro from '../Intro/intro';
//import Series from '../../containers/Series';
import Main from '../../components/Main';
import './App.css';

class App extends Component {
    
  render() {
    return ( <div className = "App" >
      <header className = "App-header" >
       <h1 className="App-title">Tv Series List</h1>
     </header >
      <Main />
      </div>
    );
  }
}

export default App;
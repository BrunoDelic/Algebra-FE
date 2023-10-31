import React from 'react';

import './App.css';

const MyContext = React.createContext({text: ''});

class Component1 extends React.Component {

  static contextType = MyContext;

  render() {
    return (
      <>
      <h2>Component 1 - Child of App</h2>
      <p>Component1: {this.context.text}</p>
      <Component2/>
      </>
    );
  }
}

class Component2 extends React.Component {

  render() {
    return (
      <MyContext.Consumer>
        {(ctx) => {
          return (
            <>
             <h2>Component 2 - Child of Component1</h2>
            <p>Compontent2: {ctx.text} </p>
            </>
          )
        }
      }
      </MyContext.Consumer>
            
    );
  }
}

class App extends React.Component {

  state= {
    inputText: ''
  };
  
  inputTextChangeHandler = (event) => {
    this.setState({inputText: event.target.value})
  }

  render () {
    return (
      <div className="App">
        <MyContext.Provider value={{text: this.state.inputText}}>
        <h1>Main Component - App</h1>
        <label>
          <input type="text" name="" value={this.inputText} onChange={this.inputTextChangeHandler} />
        </label>
        <Component1/>
        </MyContext.Provider>
      </div>
    );
  }
  
}

export default App;

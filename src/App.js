import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello');
  }

  state = {
    count: 0,
  }

  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }));
  };

  minus = () => {
    this.setState(current => ({
      count: current.count - 1,
    }));
  };

  componentDidMount() {
    console.log('componenet rendered');
  }

  componentDidUpdate() {
    console.log('I just Updated');
  }

  componentWillUnmount() {
    console.log('Goodbye, cruel world');
  }

  render() {
    console.log('Im rendering');
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
    
  }
}

export default App;
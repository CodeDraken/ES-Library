import React, { Component } from 'react';

class App extends Component {
  render() {
    console.log('app rendered')
    return (
      <div>
        <p>
          App
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default App;

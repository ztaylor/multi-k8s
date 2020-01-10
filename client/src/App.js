import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <div className="App-header mt-4">
            <h1 className="App-title">Kubernetes Fib Calculator</h1>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/otherpage">Other Page</Link>
            </li>
          </ul>

          <React.Fragment>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </React.Fragment>
        </div>
      </Router>
    );
  }
}

export default App;

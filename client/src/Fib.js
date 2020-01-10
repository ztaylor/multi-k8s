import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index,
    });
    this.setState({ index: '' });
  };

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }

  renderValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <tr key={key}>
          <td>{key}</td>
          <td>{this.state.values[key]}</td>
        </tr>
      );
    }

    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <td>Index Value</td>
            <td>Fib Value</td>
          </tr>
        </thead>
        <tbody>{entries}</tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <form className="form-inline mb-3" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="fib-number">Enter a number between 1 and 40:</label>
          </div>
          <div className="form-group mx-sm-2">
            <input
              value={this.state.index}
              onChange={event => this.setState({ index: event.target.value })}
              className="form-control form-control-lg"
              id="fib-number"
              name="fib-number"
              type="text"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>

        <div className="mb-3">
          <h3>Indexes I Have Seen</h3>
          {this.renderSeenIndexes()}
        </div>
        <hr />
        <div>
          <h3>Calculated Values</h3>
          {this.renderValues()}
        </div>
      </div>
    );
  }
}

export default Fib;

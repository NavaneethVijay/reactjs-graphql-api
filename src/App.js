import React, { Component } from 'react'
import sendRequest from './request';
import './styles/App.css';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    const query = `
    query urlResolver($url: String!) {
      urlResolver(url: $url) {
        type
        url_key
      }
    }
    `
    sendRequest({
      query,
      variables: { url: "men.html" }
    }).then(res => {
      console.log(res);
      this.setState({
        data: JSON.stringify(res)
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React and Graphql</h1>
        <p>Sample response</p>
        {
          !this.state.data ? (
            <p>Loading....</p>
          ) : (
            <div>
              {this.state.data}
            </div>
          )
        }
      </div>
    );
  }
}

import React, { Component } from 'react';

class notFound extends Component {

  componentDidMount() {
    document.title = "404";
  };

  render() {
    return (
      <div className="uk-container uk-position-center">
        <h1>Error 404</h1>
        <h2>This page doesn't exist,
          <span className="uk-text-bold"> it's your parents</span>.
        </h2>
        <p><a href="/">Go home</a>, you're drunk</p>
      </div>
    );
  }
}

export default notFound;
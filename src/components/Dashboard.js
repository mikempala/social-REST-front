import React, { Component } from 'react';
import { getSocialNetworks } from '../service';
import Loader from 'react-trope-loader'
import './Dashboard.css'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  };

  openPopup() {
    const width = 600, height = 600;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);
    
    const url = window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : 'https://social-rest.herokuapp.com/api';

    return window.open(url, '',
      `toolbar=no, location=no, directories=no, status=no, menubar=no,  scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
    );
  };

  componentDidMount() {
    document.title = "Social-REST | Dashboard";
    this.setState({ loading: false });

    getSocialNetworks()
    .then(res => console.log(res));
  };

  render() {
    if (this.state.loading) {
      return <div className="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-position-z-index uk-position-relative"><Loader /></div>;
    }

    return (
      <div>
        <button onClick={this.openPopup}>HELP</button>
      </div>
    );
  }
}

export default Dashboard;
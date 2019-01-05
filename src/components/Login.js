import React, { Component } from 'react';
import { login } from '../service';
import Loader from 'react-trope-loader'
import Footer from './Footer';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loading: true
    }
  };

  handleLogin = e => {
    e.preventDefault();

    login(this.state.user, this.props.history);
  };

  handleChange = e => {
    const { user } = this.state;

    let field = e.target.name;
    user[field] = e.target.value;

    this.setState({ user });
  };

  componentDidMount() {
    document.title = "Social-REST | Login";
    this.setState({ loading: false });
  };

  render() {
    
    if (this.state.loading) {
      return <div className="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-position-z-index uk-position-relative"><Loader /></div>;
    }

    return (
      <div className="uk-height-1-1">
      
        <div className="uk-flex uk-flex-center uk-flex-middle uk-background-muted uk-height-viewport">

        <Footer />

          <div className="uk-width-medium uk-padding-small">
            <form onChange={this.handleChange}>
              <fieldset className="uk-fieldset">
                <legend className="uk-legend">Login</legend>
                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
                    <input className="uk-input uk-form-large" required name="email" placeholder="Email" type="text" />
                  </div>
                </div>
                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
                    <input className="uk-input uk-form-large" required name="password" placeholder="Password" type="password" />
                  </div>
                </div>

                <div className="uk-margin">
                  <button type="submit" className="uk-button uk-button-primary uk-button-primary uk-button-large uk-width-1-1" onClick={this.handleLogin}>LOG IN</button>
                </div>
              </fieldset>
            </form>
            <div>
              <div className="uk-text-center">
                <a className="uk-link-reset uk-text-small" href="/register">Register account</a>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div>
          type: name
      <form action="api/twitter/{{_id}}/new" method="POST">
            <label> Tweet text:
        <input type="text" name="tweetContent" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div> */}
      </div>
    );
  }
}

export default Login;
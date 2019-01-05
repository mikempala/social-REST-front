import React, { Component } from 'react';
import Loader from 'react-trope-loader'
import './Home.css'
import Footer from './Footer';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  };

  componentDidMount() {
    document.title = "Social-REST | Home";
    this.setState({ loading: false });
  };

  render() {

    if (this.state.loading) {
      return <div className="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-position-z-index uk-position-relative"><Loader /></div>;
    }

    return (
      <div className="uk-light wrap uk-background-norepeat uk-background-cover uk-background-center-center uk-background-secondary" id="home-background-image">
        <div className="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-position-z-index uk-position-relative" data-uk-height-viewport="min-height: 400">

          <div className="uk-position-top">
            <div className="uk-container uk-container-small">
              <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                <div className="uk-navbar-left">
                  <div className="uk-background-muted">
                    <a className="uk-button uk-button-primary" href="/"><img src="https://res.cloudinary.com/dj3hdzs7e/image/upload/v1546661525/80f3224d-6d4d-4b7f-ac00-aff7ef66ca25.png" alt="Logo" /></a>
                  </div>
                </div>
                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    <li className="uk-visible@s"><a href="">Features</a></li>
                    <li className="uk-visible@s"><a href="/register">Signup</a></li>
                    <li className="uk-visible@s"><a href="/login">Login</a></li>
                    <li><a class="uk-navbar-toggle" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav"></a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>

          <div className="uk-container uk-container-small uk-flex-auto uk-text-center" data-uk-scrollspy="target: > .animate; cls: uk-animation-slide-bottom-small uk-invisible; delay: 300">
            <h1 className="uk-heading-primary animate uk-invisible hero-font">Social Media Made Easy</h1>
            <hr />
            <div className="uk-width-4-5@m uk-margin-auto animate uk-invisible">
              <p className="lead">With Social-REST you're able to manage your tweets</p>
            </div>
            <div className="uk-margin-medium-top animate uk-invisible" data-uk-margin data-uk-scrollspy-className="uk-animation-fade uk-invisible">
              <a className="uk-button uk-button-default uk-button-large uk-width-2-3 uk-width-auto@s" data-uk-icon="arrow-right" title="Learn More">LEARN MORE</a>
              <a href="/register" className="uk-button uk-button-primary uk-button-large uk-width-2-3 uk-width-auto@s" data-uk-icon="check" title="Learn More" >TRY IT OUT</a>
            </div>
          </div>

          <Footer />
          
        </div>
      </div>
    );
  }
}

export default Home;
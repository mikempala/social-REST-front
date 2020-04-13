import React, { Component } from 'react';
import { getSocialNetworks, logout } from '../service';
import Loader from 'react-trope-loader'
import './Dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: {},
      socialNetworks: []
    }
  };

  handleLogout = () => {
    logout(this.props.history);
  }

  addTwitter = () => {
    const url = `${process.env.REACT_APP_BASE_URL}/api/auth/twitter?id=${this.state.user._id}`;

    const addTwitterWindow = window.open(url, '_blank');

    const timer = setInterval(() => { 
      if(addTwitterWindow.closed) {
        clearInterval(timer);
        getSocialNetworks()
          .then(res => this.setState({ socialNetworks: res.data.socialNetworks})
        );
      }
    }, 1000); 
  };

  componentDidMount() {
    document.title = "Social-REST | Dashboard";

    this.setState({
      loading: false,
      user: JSON.parse(localStorage.getItem('user'))
    })

    getSocialNetworks()
    .then(res => this.setState({
      socialNetworks: res.data.socialNetworks
    }));
  };

  render() {
    if (this.state.loading) {
      return <div className="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-position-z-index uk-position-relative"><Loader /></div>;
    }

    const { socialNetworks } = this.state;
    // console.log(socialNetworks[0]._id)

    return (
      <div>
        <button onClick={this.openPopup}>HELP</button>
        <header id="top-head" className="uk-position-fixed">
          <div className="uk-container uk-container-expand uk-background-primary">
            <nav className="uk-navbar uk-light" data-uk-navbar="mode:click; duration: 250">
              <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                  <li><a href="#" data-uk-icon="icon:user" title="Your profile"></a></li>
                  <li><a href="#" onClick={this.handleLogout} data-uk-icon="icon:sign-out" title="Sign Out"></a></li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <aside id="left-col" className="uk-light uk-visible@m">
          <div className="left-logo uk-flex uk-flex-middle uk-background-muted">
            <img className="custom-logo" src="https://res.cloudinary.com/dj3hdzs7e/image/upload/v1546661525/80f3224d-6d4d-4b7f-ac00-aff7ef66ca25.png" alt="" />
          </div>
          <div className="left-content-box content-box-dark">
            <img src="https://res.cloudinary.com/dj3hdzs7e/image/upload/v1543784645/avatar.png" alt="" className="uk-border-circle profile-img" />

            {socialNetworks ? <h4 className="uk-text-center uk-margin-remove-vertical text-light">No social networks found</h4> : <h4 className="uk-text-center uk-margin-remove-vertical text-light">{"Social Network Name"}</h4> }

            <div className="uk-position-relative uk-text-center uk-display-block">


              <div className="uk-dropdown user-drop" data-uk-dropdown="mode: click; pos: bottom-center; animation: uk-animation-slide-bottom-small; duration: 150">
                <ul className="uk-nav uk-dropdown-nav uk-text-left">
                  <li><a href="#"><span data-uk-icon="icon: info"></span> Summary</a></li>
                  <li><a href="#"><span data-uk-icon="icon: refresh"></span> Edit</a></li>
                  <li><a href="#"><span data-uk-icon="icon: settings"></span> Configuration</a></li>
                  <li className="uk-nav-divider"></li>
                  <li><a href="#"><span data-uk-icon="icon: image"></span> Your Data</a></li>
                  <li className="uk-nav-divider"></li>
                  <li><a href="#"><span data-uk-icon="icon: sign-out"></span> Sign Out</a></li>
                </ul>
              </div>

            </div>
          </div>

          <div className="left-nav-wrap">
            <ul className="uk-nav uk-nav-default uk-nav-parent-icon" data-uk-nav>
              <li className="uk-nav-header">ACTIONS</li>
              <li><a href="#"><span data-uk-icon="icon: pencil" className="uk-margin-small-right"></span>New Post</a></li>
              <li><a href="#"><span data-uk-icon="icon: comments" className="uk-margin-small-right"></span>Messages</a></li>
              <li><a href="#" onClick={this.addTwitter}><span data-uk-icon="icon: users" className="uk-margin-small-right"></span>Add Social Network</a></li>
              <li><a href="#"><span data-uk-icon="icon: plus" className="uk-margin-small-right"></span>Followers</a></li>
              <li className="uk-parent"><a href="#"><span data-uk-icon="icon: social" className="uk-margin-small-right"></span>Select Social Network</a>
                <ul className="uk-nav-sub">
                  <li><a href="#">Social Network 1</a></li>
                  <li><a href="#">Social Network 2</a></li>
                  <li><a href="#">Social Network 3</a></li>
                  <li><a href="#">Social Network 4</a></li>
                </ul>
              </li>
              <li><a href="#"><span data-uk-icon="icon: lifesaver" className="uk-margin-small-right"></span>Help</a></li>
            </ul>
          </div>
          <div className="bar-bottom">
            <ul className="uk-subnav uk-flex uk-flex-center uk-child-width-1-5" data-uk-grid>
              <li>
                <a href="/" className="uk-icon-link" data-uk-icon="icon: home" title="Home"></a>
              </li>
            </ul>
          </div>
        </aside>

        <div id="content" data-uk-height-viewport="expand: true">
          <div className="uk-container uk-container-expand">
            <div className="uk-grid uk-grid-divider uk-grid-medium uk-child-width-1-2 uk-child-width-1-2@l uk-child-width-1-5@xl" data-uk-grid>
              <div>
                <span className="uk-text-small"><span data-uk-icon="icon:users" className="uk-margin-small-right uk-text-primary"></span>Followers</span>
                <h1 className="uk-heading-primary uk-margin-remove  uk-text-primary">2.134</h1>
                <div className="uk-text-small">
                  <span className="uk-text-success" data-uk-icon="icon: triangle-up">15%</span> more than last week.
						</div>
              </div>
              <div>

                <span className="uk-text-small"><span data-uk-icon="icon:user" className="uk-margin-small-right uk-text-primary"></span>Following</span>
                <h1 className="uk-heading-primary uk-margin-remove uk-text-primary">8.490</h1>
                <div className="uk-text-small">
                  <span className="uk-text-warning" data-uk-icon="icon: triangle-down">-15%</span> less than last week.
						</div>

              </div>
            </div>
            <hr />
            <div className="uk-grid uk-grid-medium" data-uk-grid>

              <div className="uk-width-1-2@l">
                <div className="uk-card uk-card-default uk-card-small uk-card-hover">
                  <div className="uk-card-header">
                    <div className="uk-grid uk-grid-small">
                      <div className="uk-width-auto"><h4>Activity Stream</h4></div>
                    </div>
                  </div>
                  <div className="uk-card-body">
                    <div className="chart-container">
                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="uk-width-1-2@l">
                <div className="uk-card uk-card-default uk-card-small uk-card-hover">
                  <div className="uk-card-header">
                    <div className="uk-grid uk-grid-small">
                      <div className="uk-width-auto"><h4>Home Stream</h4></div>
                    </div>
                  </div>
                  <div className="uk-card-body">
                    <div className="chart-container">
                      
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <footer className="uk-section uk-section-small uk-text-center">
              <hr />
              <span className="uk-text-small uk-text-muted">© Social-REST - <a href="https://github.com/mikempala" rel="noopener noreferrer" target="_blank">Created by Miguel Tellez</a> </span>
            </footer>
          </div>
        </div>

      </div>
    );
  }
}

export default Dashboard;
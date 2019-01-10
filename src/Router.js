import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import notFound from './components/notFound';

const Router = () => (
	<Switch>
		<Route exact path="/" component={Home} />
    <Route exact path='/login' component={Login} />
		<Route exact path='/register' component={Register} />
		<Route exact path='/dashboard' component={Dashboard} />
		<Route component={notFound} />
	</Switch>
);

export default Router;

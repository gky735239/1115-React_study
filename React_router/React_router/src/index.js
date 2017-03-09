import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import App from './component/App'
import About from './component/About'
import Repos from './component/Repos'
import Home from './component/Home'
import Repo from './component/Repo'


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="repos" component={Repos}>
                <Route path="/repos/:username/:repoName" component={Repo}/>
            </Route>

        </Route>
    </Router>
), document.getElementById('app'))


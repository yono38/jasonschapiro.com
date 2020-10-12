import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import JasonJson from './containers/JasonJson';
import UserJson from './containers/UserJson';
import SourceLink from './components/SourceLink';

export default function App() {
  return (
    <Router>
      <Route component={SourceLink} />
      <Switch>
        <Route path="/jsonify/:githubHandle" component={UserJson} />
        <Route exact path="/" component={JasonJson} />
      </Switch>
    </Router>
  );
}

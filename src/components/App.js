import React from 'react';
import NumberList from './NumberList';
import history from '../history';
import Header from './Header';
import ContactCreate from './ContactCreate';
import ContactDelete from './ContactDelete';
import ContactEdit from './ContactEdit';
import ContactShow from './ContactShow';
import Welcome from './Welcome';
import { Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Welcome}></Route>
            <Route path="/numberlist" exact component={NumberList}></Route>
            <Route path="/contacts/new" exact component={ContactCreate}></Route>
            <Route path="/contacts/edit/:name" exact component={ContactEdit}></Route>
            <Route path="/contacts/delete/:name" exact component={ContactDelete}></Route>
            <Route path="/contacts/:name" exact component={ContactShow}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
};

export default App;

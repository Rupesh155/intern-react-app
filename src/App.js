import React from 'react';
import CheckScore from './CheckScore';
import AddPlayer from './AddPlayer';
import UpdateScore from './UpdateScore';
import { Route, Switch, Router } from 'react-router-dom';
import history from './History';
import Home from './Home';
const App = () => {
  return (
    <>
      <Router history={history}>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/CheckScore' exact component={CheckScore} />
          <Route path='/AddPlayer' exact component={AddPlayer} />
          <Route path='/UpdateScore' exact component={UpdateScore} />

          
        </Switch>
      </Router>
    </>

  );
};
export default App;
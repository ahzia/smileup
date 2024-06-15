import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CivicPage from './components/Smile';
import OpportunitiesPage from './components/Grow';
import ProfilePage from './components/ProfilePage';
import LeaderboardPage from './components/LeaderboardPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/smile">Smile</Link>
          <Link to="/grow">Grow</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/leaderboard">Leaderboard</Link>
        </nav>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/smile" component={CivicPage} />
          <Route path="/grow" component={OpportunitiesPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/leaderboard" component={LeaderboardPage} />
          <Route path="/" component={Home} /> {/* Default route */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

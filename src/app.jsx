import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CivicPage from "./components/Smile";
import OpportunitiesPage from "./components/Grow";
import ProfilePage from "./components/ProfilePage";
import LeaderboardPage from "./components/LeaderboardPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  const isLogedIn = true;
  return (
    <Router>
      <Switch>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {isLogedIn && (
          <Layout>
            <Route path="/smile" component={CivicPage} />
            <Route path="/grow" component={OpportunitiesPage} />
            <Route path="/leaderboard" component={LeaderboardPage} />
            <Route path="/profile" component={ProfilePage} />
          </Layout>
        )}
      </Switch>
    </Router>
  );
}

export default App;

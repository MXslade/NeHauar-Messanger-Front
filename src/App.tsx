import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Chat } from "./components/chat/Chat";

const App: React.FC = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path={"/"}>
          Main page
        </Route>
        <Route exact path={"/chat"}>
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

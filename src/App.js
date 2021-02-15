import "./App.css";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import CharacterPage from "./components/CharacterPage";
import EpisodePage from "./components/EpisodePage";

function App() {
  return (
    <>
    
      <Router>
        <Switch>
          <Route path="/characters">
            <CharacterPage />
          </Route>
          <Route path="/episodes">
            <EpisodePage />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;

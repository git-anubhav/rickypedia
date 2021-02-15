import "./App.css";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import CharacterPage from "./components/CharacterPage";
import EpisodePage from "./components/EpisodePage";

function App() {
  return (
    <>
    
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
      </BrowserRouter>
    </>
  );
}
export default App;

import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { Navigation } from "./common/Navigation";
import AuthorPage from "./features/author/AuthorPage";
import { toAuthor } from "./routes";

export const App = () => (
  <HashRouter>
    <Normalize />
    <Navigation />
    <Switch>
        
      <Route path={toAuthor()}>
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect />
      </Route>
    </Switch>
  </HashRouter>
);

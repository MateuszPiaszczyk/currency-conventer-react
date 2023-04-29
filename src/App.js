import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { Navigation } from "./common/Navigation";
import { AuthorPage } from "./features/author/AuthorPage";
import { CurrencyConventerPage } from "./features/currency-conventer/CurrencyConventerPage";
import { toAuthor, toCurrencyConventer } from "./routes";

export const App = () => (
  <HashRouter>
   <Normalize />
    <Navigation />
    <Switch>
      <Route path={toCurrencyConventer()}>
        <CurrencyConventerPage />
      </Route>
      <Route path={toAuthor()}>
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to={toCurrencyConventer()} />
      </Route>
    </Switch>
  </HashRouter>
);

import { HashRouter, Route, Switch } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import { toAuthor } from "./routes";

export const App = () => (
    <HashRouter>
        <Navigation />
        <Switch>
            <Route path={toAuthor}>

            </Route>
        </Switch>
    </HashRouter>
);
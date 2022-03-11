import { Login, Main, Header } from "./components";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export const routes =
    <Switch>
        <Route exact path="/">
            <Main />
        </Route>
        <Route path="/Login">
            <Login />
        </Route>
        <Route path="/Home">
            <Main />
        </Route>
    </Switch>
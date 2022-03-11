import { Login, Feed } from "./components";
import {
    Switch,
    Route,
} from "react-router-dom";

export const routes =
    <Switch>
        <Route exact path="/">
            <Feed />
        </Route>
        <Route path="/Login">
            <Login />
        </Route>
    </Switch>
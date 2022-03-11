
import { Login, Main, Header } from "./components";
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom";
import { routes } from './Rotas';

const App = () =>
    <Router>
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

    </Router>

export default App;

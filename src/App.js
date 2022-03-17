
import { BrowserRouter } from "react-router-dom";
import { PrivateRoute, Routes } from './Rotas';


const App = () =>
    <BrowserRouter>
        <PrivateRoute />
    </BrowserRouter>

export default App;

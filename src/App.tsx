//React
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
//Components
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Home from './Pages/Home/Home'


const App: React.FC = (): JSX.Element => {


    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
        </Router>
    );
}

export default App;

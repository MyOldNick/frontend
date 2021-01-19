//React
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
//Store
import {observer} from "mobx-react-lite";
import UserStore from './Store/User'
//Pages
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
//Components
import Main from './Components/Main/Main'


const App: React.FC = observer((): JSX.Element => {

    return (
            <Router>
                <Route exact path="/" render={() => (!UserStore.user?.username ? <Redirect to='/login'/>: <Main/>)}/>
                <Route path="/register" render={() => (UserStore.user?.username ? <Redirect to='/'/> : <Register/>)}/>
                <Route path="/login" render={() => (UserStore.user?.username ? <Redirect to='/'/> : <Login/>)}/>
            </Router>
    );
})

export default App;

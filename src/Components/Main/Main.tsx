import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
//Pages
import Home from '../../Pages/Home/Home'
import User from '../../Pages/User/User'
import MainMenu from '../../Pages/MainMenu/MainMenu'
//Components
import Menu from '../Menu/Menu'


const Main: React.FC = (): JSX.Element => {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route path="/profile" component={User}/>
            <Route path="/menu" component={MainMenu}/>
            <Menu />
        </Router>
    )
}

export default Main
import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
//Pages
import Home from '../../Pages/Home/Home'
import User from '../../Pages/User/User'
import MainMenu from '../../Pages/MainMenu/MainMenu'
import Comment from '../../Pages/Comment/Comment'
//Components
import Menu from '../Menu/Menu'
import Header from '../Header/Header'


const Main: React.FC = (): JSX.Element => {
    return (
        <Router>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/profile" component={User}/>
            <Route path="/menu" component={MainMenu}/>
            <Route path={'/post/:id'} component={Comment}/>
            <Menu />
        </Router>
    )
}

export default Main
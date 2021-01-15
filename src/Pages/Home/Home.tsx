import React from 'react'
import {
    Link
} from "react-router-dom";

const Home: React.FC = (): JSX.Element => {
    return (
        <div>
            <Link to={'/login'}>Страница входа</Link>
            <br/>
            <Link to={'/register'}>Регистрация</Link>
        </div>
    )
}

export default Home
//React
import React from 'react'
//Store
import {observer} from "mobx-react-lite";
import UserStore from '../../Store/User'

const Home: React.FC = observer((): JSX.Element => {


    return (
        <div>
            <h1>Welcome {UserStore.user.username.toUpperCase()} :3 </h1>
            <div>Тут будут все популярные посты</div>
        </div>
    )
})

export default Home
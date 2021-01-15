//React
import React, {useEffect} from 'react';
//Store
import {observer} from "mobx-react-lite";
import Users from './Store/Users'


const App: React.FC = observer((): JSX.Element => {


    useEffect(() => {
        Users.getUsers()
    }, [])


    return (
        <div className="App">
            {Users.users.map((el: any) => (<div key={el.id}>{el.name}</div>))}
        </div>
    );
})

export default App;

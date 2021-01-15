//MobX
import {makeAutoObservable, runInAction} from "mobx";
//Types
import {UserType} from '../Types/Users'

class Users {

    users: Array<UserType> = []

    constructor() {
        makeAutoObservable(this)
    }

    getUsers() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((res: any) => res.json())
            .then((res: Array<UserType>) => runInAction(() => this.users = res))
    }
}


export default new Users()
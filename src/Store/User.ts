//MobX
import {makeAutoObservable} from "mobx";


class UserStore {
    user: any = {
        name: undefined
    }

    constructor() {
        makeAutoObservable(this)
    }

    getUserData() {
        this.user.name = 'Mark'

        console.log(this.user)
    }
}

export default new UserStore()
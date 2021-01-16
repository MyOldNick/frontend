//MobX
import {makeAutoObservable} from "mobx";


class UserStore {
    user: any =  {}


    constructor() {
        makeAutoObservable(this)
    }

    async authUser(data: any) {

        const body = JSON.stringify(data)

        const res = await fetch(`http://40.127.228.80:1337/users/auth/`, {
            method: "POST",
            body: body
        })

        const json =  await res.json()

        this.user = json.data.user


        return res
    }

}

export default new UserStore()
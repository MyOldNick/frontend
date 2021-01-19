//MobX
import {makeAutoObservable} from "mobx";
//constants
import {API} from '../Constants/API'

class UserStore {
    user: any = {}
    userPosts: Array<any> = []


    constructor() {
        makeAutoObservable(this)
    }

    fakeUser() {
        this.user.username = 'Fake User'
    }

    async authUser(data: any) {

        const body = JSON.stringify(data)

        const res = await fetch(`${API}users/auth/`, {
            method: "POST",
            body: body
        })

        const json = await res.json()

        localStorage.setItem("token", json.data.token)

        this.user = json.data.user


        return res
    }

    async createPost(data: any) {

        const token = await localStorage.getItem("token")

        const body = JSON.stringify({token: token, data: {title: data}})


        const res = await fetch(`${API}events/`, {
            method: 'POST',
            body: body
        })

        const json = await res.json()

        this.userPosts.unshift(json.data)

    }


}

export default new UserStore()
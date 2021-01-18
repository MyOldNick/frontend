//MobX
import {makeAutoObservable, runInAction} from "mobx";


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

        const res = await fetch(`http://40.127.228.80:1337/users/auth/`, {
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


        const res = await fetch(`http://40.127.228.80:1337/events/`, {
            method: 'POST',
            body: body
        })

        const json = await res.json()

        this.userPosts.unshift(json.data)

    }

    getUserPosts() {
        const token = localStorage.getItem("token")

        const body = JSON.stringify({token: token, page: 1})

        fetch(`http://40.127.228.80:1337/events/1/`, {
            method: "POST",
            body: body
        })
            .then(res => res.json())
            .then(res => runInAction(() => this.userPosts = res.data.reverse()))
    }

}

export default new UserStore()
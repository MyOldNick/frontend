//MobX
import {makeAutoObservable, runInAction} from "mobx";
//Constants
import {API} from '../Constants/API'


class HomeStore {
    allPosts: Array<any> = []

    constructor() {
        makeAutoObservable(this)
    }

    getAllPosts(page: number) {
        const token = localStorage.getItem("token")

        const body = JSON.stringify({token: token, page: page})

        fetch(`${API}events/${page}/`, {
            method: "POST",
            body: body
        })
            .then(res => res.json())
            .then(res => runInAction(() => this.allPosts = res.data.posts.reverse()))
    }
}

export default new HomeStore()
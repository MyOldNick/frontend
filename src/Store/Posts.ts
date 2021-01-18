import {makeAutoObservable, runInAction} from "mobx";


class PostsStore {
    allPosts: Array<any> = []

    constructor() {
        makeAutoObservable(this)
    }

    getAllPosts() {
        const token = localStorage.getItem("token")

        const body = JSON.stringify({token: token, page: 1})

        fetch(`http://40.127.228.80:1337/events/1/`, {
            method: "POST",
            body: body
        })
            .then(res => res.json())
            .then(res => runInAction(() => this.allPosts = res.data.reverse()))
    }
}

export default new PostsStore()
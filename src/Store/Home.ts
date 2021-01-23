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
            .then(res => runInAction(() => {
                this.allPosts = res.data.posts.reverse()
                console.log(res)
            }))
    }


    createComment(id: string, text: string) {
        const token = localStorage.getItem("token")

        const body = JSON.stringify({
            token: token,
            data: {
                text: text
            }
        })

        fetch(`${API}/comments/post/${id}/`, {
            method: "POST",
            body: body
        })
            .then(res => res.json())
            .then(res => runInAction(() => {
                console.log(res)
            }))

    }
}

export default new HomeStore()
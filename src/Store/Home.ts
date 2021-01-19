//MobX
import {makeAutoObservable, runInAction} from "mobx";
//Constants
import {API} from '../Constants/API'


class HomeStore {
    allPosts: Array<any> = []

    constructor() {
        makeAutoObservable(this)
    }

    getAllPosts() {
        const token = localStorage.getItem("token")

        const body = JSON.stringify({token: token, page: 1})

        fetch(`${API}events/1/`, {
            method: "POST",
            body: body
        })
            .then(res => res.json())
            .then(res => runInAction(() => {
                if(res.data.length > 0) {
                    this.allPosts = res.data.reverse()
                }
            }))
    }
}

export default new HomeStore()
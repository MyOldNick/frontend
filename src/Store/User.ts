//MobX
import {makeAutoObservable} from "mobx";


class UserStore {
    user: any =  {
    }
    posts: Array<any> = []


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

        const json =  await res.json()

        this.user = json.data.user


        return res
    }

    createPost(data: any) {

        this.posts.push(data)
    }

}

export default new UserStore()
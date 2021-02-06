//MobX
import { makeAutoObservable } from "mobx";
//constants
import { API } from "../Constants/API";

class UserStore {
  user: any = {};
  userPosts: Array<any> = [];

  constructor() {
    makeAutoObservable(this);
  }

  fakeUser() {
    this.user.username = "Fake User";
  }

  async authUser(data: any) {
    const body = JSON.stringify(data);

    const res = await fetch(`${API}auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    const json = await res.json();

    localStorage.setItem("token", json.data.token);

    this.user = json.data.user;

    return res;
  }

  async createPost(data: string) {
    const token: any = await localStorage.getItem("token");

    const body = JSON.stringify({ title: data, author: this.user.username });

    console.log(data);

    const res = await fetch(`${API}posts/`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: body,
    });

    const json = await res.json();

    console.log(json);

    this.userPosts.unshift(json.data);
  }
}

export default new UserStore();

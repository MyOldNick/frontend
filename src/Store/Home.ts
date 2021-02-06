//MobX
import { makeAutoObservable, runInAction } from "mobx";
//Constants
import { API } from "../Constants/API";

class HomeStore {
  allPosts: Array<any> = [];

  constructor() {
    makeAutoObservable(this);
  }

  getAllPosts(page: number) {
    const token: any = localStorage.getItem("token");

    fetch(`${API}posts/${page}/`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => runInAction(() => (this.allPosts = res.results)));
  }

  createComment(id: string, text: string) {
    const token = localStorage.getItem("token");

    const body = JSON.stringify({
      token: token,
      data: {
        text: text,
      },
    });

    fetch(`${API}/comments/post/${id}/`, {
      method: "POST",
      body: body,
    })
      .then((res) => res.json())
      .then((res) =>
        runInAction(() => {
          console.log(res);
        })
      );
  }
}

export default new HomeStore();

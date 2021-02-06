//MobX
import { makeAutoObservable } from "mobx";

class Language {
  english: any = false;

  constructor() {
    makeAutoObservable(this);
  }

  changeLanguage() {
    this.english = !this.english;
  }
}

export default new Language();

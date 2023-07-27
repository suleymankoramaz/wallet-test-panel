import { makeAutoObservable } from 'mobx';

class APIStore {
  APIUrl:string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setAPIUrl(APIUrl: string) {
    this.APIUrl = APIUrl;
  }

  handleChange = (value: string) => {
    this.APIUrl = value;
  }
}

const apiStore = new APIStore();
export default apiStore;

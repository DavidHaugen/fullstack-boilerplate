import config from '../config';

const ApiService = {
  getStuff() {
    return fetch(`${config.API_ENDPOINT}`)
      .then(res =>{
        return res.json()
      })
  }
}

export default ApiService;
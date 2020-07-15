import axios from "axios";

const host = "https://api.theindex.tech";

class api {
  static async getData() {
  
    return axios
      .get(host)
      .then((response) => {
        
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default api;

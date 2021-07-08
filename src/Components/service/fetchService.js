import axios from "axios";

class Fetch {
  async table(url) {
    const { data } = await axios.get(url);
    return data;
  }
}

export default new Fetch();

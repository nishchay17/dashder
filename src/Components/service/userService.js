import axios from "axios";

import { API } from "../../api";
import user from "../../config/API/user";

class User {
  async all() {
    const { data } = await axios.get(`${API}${user.all}`);
    return data;
  }
  async edit(id, role) {
    const { data } = await axios.put(`${API}${user.edit}`, { id, role });
    return data;
  }
  async delete(id) {
    const { data } = await axios.delete(`${API}${user.delete}`, {
      data: { id },
    });
    return data;
  }
  async add({ name, role }) {
    const { data } = await axios.post(`${API}${user.add}`, { name, role });
    return data;
  }
}

export default new User();

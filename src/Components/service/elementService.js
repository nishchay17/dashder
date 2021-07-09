import axios from "axios";

import { API } from "../../api";
import element from "../../config/API/element";

class User {
  async all() {
    const { data } = await axios.get(`${API}${element.all}`);
    return data;
  }
  async edit(id, role) {
    const { data } = await axios.put(`${API}${element.edit}`, { id, role });
    return data;
  }
  async delete(id) {
    const { data } = await axios.delete(`${API}${element.delete}`, {
      data: { id },
    });
    return data;
  }
  async add({ name, permission, endpoint, type }) {
    const { data } = await axios.post(`${API}${element.add}`, {
      name,
      permission,
      endpoint,
      type,
    });
    return data;
  }
}

export default new User();

import axios from "axios";

export default {
  getPersons: () =>
    axios.get("http://localhost:8889/person").then(ret => ret.data)
};

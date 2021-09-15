import axios from "axios";
import store from "./store/index.js";

export default axios.create({
    baseURL: "http://localhost:3000/api/",
    headers: {
        Authorization: `${store.state.token}`,
    },
});

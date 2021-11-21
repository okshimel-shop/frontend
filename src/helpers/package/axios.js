import Axios from "axios";

Axios.defaults.baseURL = process.env.NODE_ENV === "production" ? `${process.env.REACT_APP_PRODUCT_SERVER_URL}` : `${process.env.REACT_APP_LOCAL_SERVER_URL}`;

const axios = Axios.create()

export default axios;
import axios from "axios"

const instance = axios.create({
    baseURL: "https://us-central1-clone-e0fbe.cloudfunctions.net/api"
    // "http://localhost:5001/clone-e0fbe/us-central1/api" // the api (cloud function url)
})


export default instance;
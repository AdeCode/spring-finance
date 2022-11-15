import axios from 'axios'

export default axios.create({
    baseURL: 'https://frkrvith3d.execute-api.us-east-1.amazonaws.com/api',
    headers: {
        "Content-type" : "application/json",
    }
});

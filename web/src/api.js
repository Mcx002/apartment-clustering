import axios from 'axios';

export const findCluster = async (payload) => {
    return axios.post("http://localhost:8000/clusters/check", payload).then(result => result.data);
}
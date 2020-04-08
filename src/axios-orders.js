import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://reactpractice-b8cd7.firebaseio.com/'
});
export default instance;
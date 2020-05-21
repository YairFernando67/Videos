import axios from 'axios';

// const KEY = 'AIzaSyBiKXHJJBXR7YqnBEsIovHdhHKHqfz8-N4'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
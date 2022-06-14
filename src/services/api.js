import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '27971188-e95cbfa97f4303e55a62ce8a4';
// axios.defaults.baseURL = BASE_URL;

export const getPhotos = (queryInput, page) =>
  axios.get(
    BASE_URL +
      `?q=${queryInput}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '27971188-e95cbfa97f4303e55a62ce8a4';
// axios.defaults.baseURL = BASE_URL;

export const getPhotos = (queryInput, page) =>
  axios.get(
    BASE_URL +
      `?q=${queryInput}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

//   axios.get(BASE_URL + `?page=${page}&api_key=${API_KEY}`);

// https://pixabay.com/api/?q=cat&page=1&key=27971188-e95cbfa97f4303e55a62ce8a4&image_type=photo&orientation=horizontal&per_page=12

// componentDidMount() {
//   this.setState({ isLoading: true });
//   setTimeout(() => {
//     fetch(
//       `https://pixabay.com/api/?q=cat&page=1&key=27971188-e95cbfa97f4303e55a62ce8a4&image_type=photo&orientation=horizontal&per_page=12`
//     )
//       .then(res => res.json())
//       .then(photos => this.setState({ photos }))
//       .finally(() => this.setState({ isLoading: false }));
//   });
// }

// componentDidUpdate(prevProps, prevState) {
//   const { isShow, page } = this.state;
//   if (prevState.isShow !== isShow || prevState.page !== page) {
//     this.fetchPhotos(page);
//   }
// }
// onSearch = event => {
//   event.preventDefault();
//   const { inputValue } = this.state;
//   console.log(inputValue);
//   this.props.onSubmit({ inputValue });
// };

// fetchPhotos = page => {

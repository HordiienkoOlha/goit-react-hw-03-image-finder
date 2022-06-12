import { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import { Rings } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar';
// import ImageGallery from "./ImageGallery"
// import { getPhotos } from '../services/api';
// import { mapper } from 'helpers/mapper';
import s from '../components/App.module.css';

class App extends Component {
  state = {
    query: '',
  };
  onSearch = query => {
    this.setState({ query });
  };
  render() {
    const { onSearch } = this;
    return (
      <div className={s.app}>
        <Searchbar onSubmit={onSearch} />
        {/* {isLoading && (
          // <div className={s.spinner}>
          //   <Rings color="#3f51b5" height={80} width={80} />
          // </div>
        )} */}
        {/* <ImageGallery /> */}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
//         <Searchbar query={query} onHandle={this.onHandle} />

// <Loader>, <Button> і <Modal></Modal>

// onSearch = () => {
//     console.log("search")
//   }
//   onHandle = () => {
//         console.log("button search")
//   }

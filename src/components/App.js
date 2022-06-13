import { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

import s from '../components/App.module.css';

class App extends Component {
  state = {
    queryInput: '',
  };
  onSearch = queryInput => {
    this.setState({ queryInput });
  };
  render() {
    const { onSearch } = this;
    const { queryInput } = this.state;
    return (
      <div className={s.app}>
        <Searchbar onSubmit={onSearch} />

        <ImageGallery queryInput={queryInput} />
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

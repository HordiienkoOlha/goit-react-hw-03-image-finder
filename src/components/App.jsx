import { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings } from 'react-loader-spinner'

// import Searchbar from "./Searchbar";
// import ImageGallery from "./ImageGallery"
import s from '../components/App.module.css'



class App extends Component {
  state = {
    page: 1,
  }

  render() {
    // const {onHandle, onSearch} =this
  return (
    <div className={s.app}>
      {/* <Searchbar/> */}
      {/* <ImageGallery /> */}
      <Rings color="#3f51b5" height={80} width={80} />
    </div>
  );
};}

export default App;

// <Loader>, <Button> і <Modal></Modal> 


// onSearch = () => {
//     console.log("search")
//   }
//   onHandle = () => {
//         console.log("button search")
//   }
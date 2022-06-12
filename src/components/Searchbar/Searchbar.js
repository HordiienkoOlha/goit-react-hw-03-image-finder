// import PropTypes from 'prop-types';
import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';

import s from './Searchbar.module.css';

class SearchBar extends Component {
  state = {
    query: '',
    isLoad: false,
  };
  handleNameChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };
  onChange = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      toast('Please enter search query!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    const { query } = this.state;
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.onChange}>
          <button type="submit" aria-label="Search" className={s.button}>
            <span className={s.buttonLabel}>
              <BsSearch />
            </span>
          </button>
          <input
            className={s.input}
            type="text"
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;

// MdOutlineSearch;

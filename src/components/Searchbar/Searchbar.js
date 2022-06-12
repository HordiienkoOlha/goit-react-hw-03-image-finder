import s from './Searchbar.module.css';

const SearchBar = () => {
  return (
    <header className={s.searchbar}>
      <form className={s.form}>
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default SearchBar;

// <header class="container-form bg-secondary bg-gradient shadow">
//   <form class="js-search-form">
//     <div
//       class="input-group d-flex p-3 justify-content-center"
//       id="search-form"
//     >
//       <input
//         type="text"
//         class="form-control js-input"
//         name="query"
//         autocomplete="off"
//         placeholder="Search images..."
//         id="search-box"
//         maxlength="10"
//         required
//       />
//       <button type="submit" class="btn btn-secondary js-search-btn">
//         <span class="material-icons-outlined align-bottom">search</span>
//       </button>
//     </div>
//   </form>
// </header>;

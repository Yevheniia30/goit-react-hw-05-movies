// import React from 'react';
// import PropTypes from 'prop-types';
import s from './Search.module.css';
import { FaSearch } from 'react-icons/fa';

export const Search = props => {
  return (
    // <label>
    //   <input
    //     type="text"
    //     name="search"
    //     placeholder="search"
    //     className={s.search}
    //   />
    // </label>
    <form
      className={s.SearchForm}
      // onSubmit={this.handleSubmit}
    >
      <button type="submit" className={s.SearchForm_button}>
        {/* <span className={s.SearchForm_button_label}></span> */}
        <FaSearch />
      </button>

      <input
        className={s.SearchForm_input}
        // value={this.state.query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        // onChange={this.handleChange}
      />
    </form>
  );
};

Search.propTypes = {};

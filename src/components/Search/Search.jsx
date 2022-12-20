import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './Search.module.css';
import { FaSearch } from 'react-icons/fa';

export const Search = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    // console.log('e.target', e.target);
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() !== '') {
      onSubmit(search);
      setSearch('');
    } else {
      alert('Enter query');
    }
  };

  return (
    <form className={s.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={s.SearchForm_button}>
        <FaSearch />
      </button>

      <input
        className={s.SearchForm_input}
        value={search}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleChange}
        

      />
    </form>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

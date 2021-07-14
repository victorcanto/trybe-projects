import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from '../../context/Food/FoodContext';
import DrinkContext from '../../context/Drink/DrinkContext';

function Search({ currentPage }) {
  const { setFilterFood } = useContext(FoodContext);
  const { setFilterDrink } = useContext(DrinkContext);
  const [inputChange, setInputChange] = useState({
    inputSearch: '',
    selectedFilter: '',
  });

  function handleChange({ target: { name, value } }) {
    setInputChange({
      ...inputChange,
      [name]: value,
    });
  }

  function handleClick() {
    const { inputSearch, selectedFilter } = inputChange;

    if (selectedFilter === 'first' && inputSearch.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
      setInputChange({
        ...inputChange,
        inputSearch: '',
      });
      return;
    }
    if (currentPage === 'Foods') {
      setFilterFood({
        key: selectedFilter,
        value: inputSearch,
      });
      return;
    }
    setFilterDrink({
      key: selectedFilter,
      value: inputSearch,
    });
  }
  console.log(setInputChange);

  return (
    <div id="search-container">
      <input
        type="text"
        data-testid="search-input"
        onChange={ handleChange }
        className="input-search"
        name="inputSearch"
        value={ inputChange.inputSearch }
      />
      <section className="radio">
        <label htmlFor="ingredients">
          Ingredientes:
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            onChange={ handleChange }
            name="selectedFilter"
            value="ing"
            id="ingredients"
          />
        </label>
        <label htmlFor="name">
          Nome:
          <input
            type="radio"
            data-testid="name-search-radio"
            onChange={ handleChange }
            name="selectedFilter"
            value="name"
            id="name"
          />
        </label>
        <label htmlFor="first">
          Primeira Letra:
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            onChange={ handleChange }
            name="selectedFilter"
            value="first"
            id="first"
          />
        </label>
      </section>
      <button
        data-testid="exec-search-btn"
        type="submit"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </div>
  );
}

Search.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Search;

import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setSearch('');
  };
  return (
    <StyledWrapper>
      <form>
        <input placeholder='검색' onChange={handleChange} value={search} />
        <input
          aria-label='검색 버튼'
          name='검색'
          value={''}
          className='searchButton'
          type={'submit'}
          onClick={handleClick}
        />
      </form>
    </StyledWrapper>
  );
};

export default SearchBar;

const StyledWrapper = styled.div`
  margin-bottom: 70px;

  form {
    position: relative;
    width: 709px;

    input {
      box-sizing: border-box;
      width: 709px;
      height: 42px;
      padding: 0 12px;
      border-radius: 10px;
      border: 1px solid #929292;
      font-size: 16px;
      font-weight: 300;
    }
    .searchButton {
      position: absolute;
      width: 23px;
      height: 23px;
      right: 10px;
      bottom: 10px;
      cursor: default;
      border: none;
      background-color: white;
      background-position: center;
      background-size: 20px;
      background-repeat: no-repeat;
      background-image: url('img/IconSearch92.svg');
    }
  }
`;

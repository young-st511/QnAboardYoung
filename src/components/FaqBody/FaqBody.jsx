import React, { useState } from 'react';
import styled from 'styled-components';
import AnswersContainer from './AnswersContainer';
import CategoriesContainer from './CategoriesContainer';
import SearchBar from './SearchBar';

const FaqBody = () => {
  const [cate, setCate] = useState('폴디');

  return (
    <StyledWrapper>
      <h2>oxopolitics FAQ</h2>
      <CategoriesContainer cate={cate} setCate={setCate} />
      <SearchBar />
      <AnswersContainer cate={cate} />
    </StyledWrapper>
  );
};

export default FaqBody;

const StyledWrapper = styled.div`
  box-sizing: border-box;
  width: 1125px;
  padding: 0 50px;
  margin: 20px auto;
  display: block;

  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
  }
`;

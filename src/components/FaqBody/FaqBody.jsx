import React from 'react';
import styled from 'styled-components';
import AnswersContainer from './AnswersContainer';
import Category from './category';
import SearchBar from './SearchBar';

const FaqBody = () => {
  return (
    <StyledWrapper>
      <h2>oxopolitics FAQ</h2>
      <Category />
      <SearchBar />
      <AnswersContainer />
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
  }
`;

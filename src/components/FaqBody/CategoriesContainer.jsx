import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Category from './category';
import { mockCate } from './mockData';

const CategoriesContainer = ({ cate, setCate }) => {
  const categoriesArr = mockCate;

  const handleClick = (e) => {
    if (e.target.tagName != 'BUTTON') return;
    setCate(parseInt(e.target.value));
  };

  return (
    <StyledWrapper onClick={handleClick}>
      {categoriesArr.map((elem, idx) => (
        <Category elem={elem} cate={cate} idx={idx} key={idx} />
      ))}
    </StyledWrapper>
  );
};

export default CategoriesContainer;

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 709px;
  margin-top: 41px;
  margin-bottom: 4px;
`;

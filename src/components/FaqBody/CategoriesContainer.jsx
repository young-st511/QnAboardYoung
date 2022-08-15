import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CategoriesContainer = ({ cate, setCate }) => {
  const categoriesArr = [
    '자주 묻는 질문',
    '정치 성향별 다섯 부족',
    '폴디',
    '옥소 코인',
    '그룹',
    '알림 설정',
    '프로필 설정',
  ];

  const handleClick = (e) => {
    if(e.target.tagName != 'BUTTON') return;
    setCate(parseInt(e.target.value));
  };

  return (
    <StyledWrapper onClick={handleClick}>
      {categoriesArr.map((elem, idx) => (
        <button
          //! mockup idx 0일 때만 active 추가
          className={`category${idx === cate ? ' active' : ''}`}
          value={idx}
          type='button'
          key={idx}>
          {elem}
        </button>
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

  .category {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    height: 42px;
    margin-right: 14px;
    margin-bottom: 10px;
    padding: 10px 16px;
    font-family: SUIT;
    font-size: 16px;
    font-weight: 600;
    background: #ffffff;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    transition: color 0.2s, background-color 0.2s, border 0.2s;
  }
  .category.active {
    background: #000000;
    border: 1px solid #000000;
    color: white;
  }
`;

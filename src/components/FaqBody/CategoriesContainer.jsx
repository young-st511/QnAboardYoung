import React, { useEffect } from 'react';
import styled from 'styled-components';

const CategoriesContainer = (props) => {
  const categoriesArr = [
    '자주 묻는 질문',
    '정치 성향별 다섯 부족',
    '폴디',
    '옥소 코인',
    '그룹',
    '알림 설정',
    '프로필 설정',
  ];

  return (
    <StyledWrapper>
      {categoriesArr.map((elem, idx) => (
        <div
        //! mockup idx 0일 때만 active 추가
          className={`category${idx === 0 ? ' active' : ''}`}
          key={{ idx }}>
          {elem}
        </div>
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
  margin-bottom: 15px;

  .category {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    height: 42px;
    margin-right: 14px;
    margin-bottom: 14px;
    padding: 10px 16px;
    font-family: SUIT;
    background: #ffffff;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
  }
  .category.active {
    background: #000000;
    border: 1px solid #000000;
    color: white;
  }
`;

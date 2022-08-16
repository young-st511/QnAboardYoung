import React from 'react';
import styled from 'styled-components';
import Answer from './Answer';
import { mockAnsArray, mockAnsTitles } from './mockData';

const AnswersContainer = ({ cate }) => {
  //! Mockup Data
  let answersTitle = mockAnsTitles;
  let ansArr = mockAnsArray;

  return (
    <StyledWrapper>
      <h3>{answersTitle[cate]}</h3>
      {!!ansArr[cate] &&
        ansArr[cate].map((elem, idx) => (
          <Answer ansArr={elem} key={idx} idx={idx} />
        ))}
    </StyledWrapper>
  );
};

export default AnswersContainer;

const StyledWrapper = styled.div`
  h3 {
    width: 709px;
    font-size: 20px;
    font-weight: 700;
  }
`;

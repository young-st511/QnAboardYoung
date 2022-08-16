import React, { useState } from 'react';
import styled from 'styled-components';

const Answer = ({ ansArr: { title, answer }, idx }) => {
  //! Test
  const [active, setActive] = useState(idx === 0 ? true : false);

  return (
    <StyledWrapper className={`answerContainer${active ? ' active' : ''}`}>
      <h4 onClick={() => setActive((prev) => !prev)}>
        {title}
        <img src='img/arrow.svg' alt='닫힌 질문' />
      </h4>
      {active ? <p>{makeText(answer)}</p> : null}
    </StyledWrapper>
  );
};

const makeText = (textArr) => {
  return textArr.map((text, idx) => (
    <span key={idx}>
      {text}
      <br />
    </span>
  ));
};

export default Answer;

const StyledWrapper = styled.div`
  position: relative;
  width: 709px;
  box-sizing: border-box;
  margin-bottom: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  h4 {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    height: 46px;
    margin: 0;
    padding: 0px 16px;
    font-size: 16px;
    font-weight: 500;
    cursor: default;

    img {
      position: absolute;
      width: 20px;
      right: 18px;
      top: 17px;
    }
  }
  &.active {
    h4 {
      height: 47px;
      padding-top: 1px;
      border: 1px solid #e6e6e6;
      border-width: 0 0 1px 0;
      font-weight: 700;

      img {
        rotate: 180deg;
        top: 16px;
      }
    }
    p {
      padding: 0px 60px 0 16px;
      font-weight: 400;
      font-size: 14px;
      line-height: 180%;
    }
  }
`;

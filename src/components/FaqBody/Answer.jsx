import React, { useState } from 'react';
import styled from 'styled-components';

const Answer = ({ ansArr: { question, answer }, answerId }) => {
  const [active, setActive] = useState(false);
  const handleUpdate = (e) => {};
  const handleDelete = (e) => {};

  return (
    <StyledWrapper className={`answerContainer${active ? ' active' : ''}`}>
      <span>
        <h4 onClick={() => setActive((prev) => !prev)}>{question}</h4>
        <button onClick={handleUpdate} type='button'>
          수정
        </button>
        <button onClick={handleDelete} type='button'>
          삭제
        </button>
        <img src='img/arrow.svg' alt={active ? '닫힌 질문' : '열린 질문'} />
      </span>
      {active ? <>{makeText(answer)}</> : null}
    </StyledWrapper>
  );
};

const makeText = (answer) => {
  let answerSplit = answer.split('\\n');
  let text = [];
  for (let e of answerSplit) {
    if (e) {
      text.push(e);
    }
  }

  return (
    <p>
      {text.map((el, idx) => (
        <span key={idx}>{el}</span>
      ))}
    </p>
  );
};

export default Answer;

const StyledWrapper = styled.div`
  position: relative;
  width: 709px;
  box-sizing: border-box;
  margin-bottom: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;

  span {
    display: flex;

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
    }
    img {
      position: absolute;
      width: 20px;
      right: 18px;
      top: 17px;
    }
  }

  &.active span {
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
  }

  p {
    padding: 0px 30px 0 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
  }

  span {
    display: block;
  }
`;

import React from 'react';
import styled from 'styled-components';

const Answer = ({ ansArr: { title, answer }, idx }) => {
  return (
    <StyledWrapper className='answerContainer'>
      <h4>{title}</h4>
      {idx === 0 ? <p>{answer}</p> : null}
    </StyledWrapper>
  );
};

export default Answer;

const StyledWrapper = styled.div``;

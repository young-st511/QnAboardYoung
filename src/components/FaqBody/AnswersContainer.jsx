import React from 'react';
import styled from 'styled-components';
import Answer from './Answer';

const AnswersContainer = () => {
  let answersTitle = '자주 묻는 질문만 모았어요';
  let ansArr = [
    {
      title: '본인 인증 문자가 계속 안 오는데 어떡하죠?',
      answer: `본인인증에 문자가 전송되지 않는 경우 다음 방법을 따라 주세요

    1. 휴대폰 문자메시지 설정에서 스팸함을 확인해주세요
    2. 웹에서 본인인증을 다시 시도해주세요
    3. 인증번호가 도착하지 않을 경우  1533-5487로 [본인인증 오류] 메시지를 보내 주세요. 평일 업무시간   
    (9-18시)에 인증번호를 보내드리고 있어요. 현재 옥소를 통한 본인인증 서비스는 대한민국에 한해 제공되고 
    있어요.`,
    },
    { title: '제 부족이 왜 바뀐 거예요?', answer: `이유가 다 있습니다` },
  ];

  return (
    <StyledWrapper>
      <h3>{answersTitle}</h3>
      {ansArr.map((elem, idx) => (
        <Answer ansArr={elem} key={idx} idx={idx} />
      ))}
    </StyledWrapper>
  );
};

export default AnswersContainer;

const StyledWrapper = styled.div``;

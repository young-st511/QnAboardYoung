import React from 'react';
import styled from 'styled-components';
import Answer from './Answer';

const AnswersContainer = ({ cate }) => {
  //! Mockup Data
  let answersTitle = [
    '자주 묻는 질문만 모았어요',
    '옥소에는 호랑이-하마-코끼리-공룡-사자 다섯 부족이 있어요',
    '옥소폴리틱스 폴디(Politician Director)는 옥소코인을 활용해 정치인에 대한 지지를 표현해 정치력을 키워주고, 정치인에 대한 유권자 “나🙋🏻”의 영향력도 키우는 과정이에요',
    '옥소코인을 통해 정치인의 폴디가 될 수 있고 코인을 통해 즐길 수 있는 여러 서비스를 준비하고 있어요',
  ];
  let ansArr = [
    [
      {
        title: '본인 인증 문자가 계속 안 오는데 어떡하죠?',
        answer: [
          '본인인증에 문자가 전송되지 않는 경우 다음 방법을 따라 주세요',
          '',
          '1. 휴대폰 문자메시지 설정에서 스팸함을 확인해주세요',
          '2. 웹에서 본인인증을 다시 시도해주세요',
          '3. 인증번호가 도착하지 않을 경우  1533-5487로 [본인인증 오류] 메시지를 보내 주세요. 평일 업무시간 (9-18시)에 인증번호를 보내드리고 있어요. 현재 옥소를 통한 본인인증 서비스는 대한민국에 한해 제공되고 있어요.',
        ],
      },
      { title: '제 부족이 왜 바뀐 거예요?', answer: [`이유가 다 있습니다`] },
    ],
  ];

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
    font-size: 22px;
    font-weight: 700;
  }
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import AnswersContainer from './AnswersContainer';
import CategoriesContainer from './CategoriesContainer';
import SearchBar from './SearchBar';

const FaqBody = ({ currentUser }) => {
  const [cate, setCate] = useState('정치성향별 다섯 부족');
  const [textvalue, setTextvalue] = useState('');
  /*data : {
    title, 
    description, 
    category, 
    view count, 
    createdAt, 
    updatedAt
  }
  */
  const texthandler = (e) => {
    setTextvalue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const titleText = target.querySelector('#titleBox').value;
    const categoryText = target.querySelector('#qnaCategory').value;
    const descriptionText = target.querySelector('#description').value;
    console.log(descriptionText);
  };

  return (
    <StyledWrapper>
      <div className='container'>
        <h2>oxopolitics FAQ</h2>
        <StyledFormBox onSubmit={onSubmit}>
          <span>제목</span>
          <input id='titleBox' type='text' />
          <label htmlFor='qnaCategory'>카테고리</label>
          <select id='qnaCategory'>
            <option value=''>--Please choose an option--</option>
            <option value='FAQ'>FAQ</option>
            <option value='피드백'>피드백</option>
            <option value='매너지수'>매너지수</option>
            <option value='기타_서비스_기능'>기타 서비스 기능</option>
            <option value='프로필_설정'>프로필 설정</option>
            <option value='옥소코인'>옥소코인</option>
            <option value='알림설정'>알림 설정</option>
            <option value='폴디'>폴디</option>
            <option value='정치성향별_다섯_부족'>정치성향별 다섯 부족</option>
            <option value='그룹'>그룹</option>
          </select>
          <label htmlFor='description'>본문</label>
          <TextAreaBox
            id='description'
            maxLength={1500}
            value={textvalue}
            onChange={texthandler}
          />
          <input type='submit' value='작성하기' />
        </StyledFormBox>
        <CategoriesContainer cate={cate} setCate={setCate} />
        <SearchBar />
        <AnswersContainer cate={cate} setCate={setCate} />
      </div>
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
    font-size: 24px;
    font-weight: 700;
  }
  .container {
    width: fit-content;
    margin: 0 auto;
  }
`;

const StyledFormBox = styled.form`
  display: flex;
  flex-direction: column;
`;

const TextAreaBox = styled.textarea`
  resize: none;
  height: 200px;
`;

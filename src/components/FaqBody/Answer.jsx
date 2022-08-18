import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { dbService } from '../../firebase';

const Answer = ({ ansArr: { title, description, viewCount }, answerId }) => {
  const [active, setActive] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [answerViewCount, setAnswerViewCount] = useState(viewCount);
  const QnATextRef = doc(dbService, 'QnA', answerId);

  const increaseViewCount = async () => {
    await updateDoc(QnATextRef, {
      viewCount: answerViewCount,
    });
  };

  const handleUpdate = (e) => {
    setIsEdit(true);
  };
  const handleDelete = async (e) => {
    const ok = window.confirm('글을 삭제하시겠습니까?');
    if (ok) {
      await deleteDoc(QnATextRef);
    }
  };

  const getEditForm = () => {
    return (
      <form onSubmit={handleEditSubmit}>
        <input id='title' type='text' placeholder='제목' required />
        <input id='description' type='text' placeholder='내용' required />
        <select id='category'>
          <option value=''>--Please choose an option--</option>
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
        <input type='submit' value='수정' />
      </form>
    );
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const { target } = e;
    const titleText = target.querySelector('#title').value;
    const categoryText = target.querySelector('#category').value;
    const descriptionText = target.querySelector('#description').value;
    const timeSet = new Date();

    const data = {
      title: titleText,
      description: descriptionText,
      category: categoryText,
      updatedAt: timeSet,
    };

    const ok = window.confirm('글을 수정하시겠습니까?');
    if (ok) {
      await updateDoc(QnATextRef, data);
    }

    setIsEdit(false);
  };

  const answerCardClick = () => {
    setActive((prev) => !prev);

    if (!active) {
      setAnswerViewCount((prev) => prev + 1);
      increaseViewCount();
    }
  };

  return (
    <StyledWrapper className={`answerContainer${active ? ' active' : ''}`}>
      <span>
        <h4 onClick={answerCardClick}>{title}</h4>
        <button onClick={handleUpdate} type='button'>
          수정
        </button>
        <button onClick={handleDelete} type='button'>
          삭제
        </button>
        <img src='img/arrow.svg' alt={active ? '닫힌 질문' : '열린 질문'} />
      </span>
      {isEdit && <>{getEditForm()}</>}
      {active && !isEdit ? <>{makeText(description)}</> : null}
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

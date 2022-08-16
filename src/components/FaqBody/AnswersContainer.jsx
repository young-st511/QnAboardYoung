import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Answer from './Answer';
import { query, collection, onSnapshot, where } from 'firebase/firestore';
import { mockAnsArray, mockAnsTitles } from './mockData';
import { dbService } from '../../firebase';

const AnswersContainer = ({ cate }) => {
  //! Mockup Data
  let ansArr = mockAnsArray;
  const [answers, setAnswers] = useState([]);
  const usersCollectionRef = collection(dbService, 'QnA');

  const getData = async () => {
    const q = query(usersCollectionRef, where('category', '==', cate));
    onSnapshot(q, (snapshot) => {
      const dataArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAnswers(dataArray);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledWrapper>
      {!!answers &&
        answers.map((elem, idx) => (
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

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function HeaderSearch() {
  // dispatch(setState());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });
  return (
    <HeaderRightContainer>
      <StyledImg src={'img/IconSearch.svg'} alt={`search`} />

      {isLoggedIn ? (
        <Link to='/login'>로그아웃</Link>
      ) : (
        <Link to='/login'>로그인</Link>
      )}
    </HeaderRightContainer>
  );
}

const StyledImg = styled.img`
  display: inline-block;
  border-radius: 0;
`;

const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
  width: 161px;

  img {
    width: 16px;
    margin-right: 25px;
  }
  img:hover {
    cursor: pointer;
  }
`;

const LoginButton = styled.a`
  width: 120px;
  height: 45px;
  color: rgb(255, 255, 255);
  background-color: rgb(47, 47, 47);
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  font-family: Roboto, sans-serif;
`;

export default HeaderSearch;

import { app } from '../../firebase';

import React, { useState } from 'react';
import HeaderNav from './HeaderNav';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';

function Header(props) {
  //! Test
  console.log(app);

  const [navState, setNavState] = useState('');

  const navHandler = (text) => {
    setNavState(text);
  };

  return (
    <>
      <Stylehaed className={props.className}>
        <HeaderLogo />
        <HeaderNav activeChange={navHandler} active={navState} />
        <HeaderSearch />
      </Stylehaed>
    </>
  );
}

const Stylehaed = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-between;
  border-radius: 0;
  box-sizing: border-box;
  padding: 0 50px;
  border-bottom: 1px solid #e6e6e6;
`;

export default Header;

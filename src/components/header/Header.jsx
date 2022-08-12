import React from 'react';
import { app } from '../../firebase';

function Header() {
  console.log(app);
  return <div>헤더입니다.</div>;
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';

import { menuItem } from '@/Constants';

const Navbar = () => {
  return(
    <S.NavContent>
      { menuItem?.map((item, index) => (
        <Link key={index} to={item.path}>{item.label}</Link>
      ))}
    </S.NavContent>
  )
}

export default Navbar;

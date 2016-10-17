import React from 'react';

import Wrapper from './Wrapper';
import Icon from './Icon';
import Link from './Link';

const ListHeading = ({ text }) => {
  return (
    <Wrapper>
      <Link to="/">
        <Icon width="24" height="24" viewBox="0 0 24 24">
          <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" fill="none">
            <path d="M.5.5h10v10h-10zM13.5.5h10v10h-10zM.5 13.5h10v10h-10zM13.5 13.5h10v10h-10z"/>
          </g>
        </Icon>
      </Link>
      <h2>{text}</h2>
    </Wrapper>
  );
}

export default ListHeading;

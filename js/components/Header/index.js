import React from 'react';
import styled from 'styled-components';

import constants from '../../constants';

import Wrapper from './Wrapper';
import Link from './Link';
import Title from './Title';
import Subtitle from './Subtitle';
import Anchor from './AbsoluteAnchor';

const Logo = styled(Anchor)`
  right: initial;
  left: 0;
  font-size: 1.5em;
  font-family: Georgia, Times, 'Times New Roman', serif;
`;

const Header = () => {
    return(
			<Wrapper>
				<Logo href="https://twitter.com/mxstbr">&lt;mxstbr/&gt;</Logo>
				<Anchor href="https://github.com/himynameisdave/postcss-plugins#submitting-a-new-plugin">Add a plugin</Anchor>
				<Title><Link to="/">PostCSS.parts</Link></Title>
				<Subtitle>A searchable catalog of PostCSS plugins</Subtitle>
			</Wrapper>
    );
}

export default Header;

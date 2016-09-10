import React from "react";
import Link from "react-router/lib/Link";
import styled from 'styled-components';

import constants from '../constants';

const HeaderWrapper = styled.section`
  width: 100%;
  text-align: center;
  margin: 5em 0;
`;

const HeaderLink = styled(Link)`
	color: ${constants.brandColor};
  text-decoration: none;
`;

const Title = styled.h1`
  font-size: 3em;
  color: ${constants.brandColor};
  margin-bottom: 0.25em;
`;

const Subtitle = styled.h2`
  font-weight: 400;
  color: ${constants.lightBrandColor};
  margin-top: 0;
`;

const TopLink = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2%;
  color: ${constants.midGrey};
  text-decoration: none;
`;

const LogoWrapper = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  padding: 2%;
  display: block;
  font-size: 1.5em;
  font-family: Georgia, Times, 'Times New Roman', serif;
  text-decoration: none;
  color: #999999;
`;

const Header = () => {
    return(
			<HeaderWrapper>
				<LogoWrapper href="https://twitter.com/mxstbr">
					&lt;mxstbr/&gt;
				</LogoWrapper>
				<TopLink href="https://github.com/himynameisdave/postcss-plugins#submitting-a-new-plugin">Add a plugin</TopLink>
				<Title>
					<HeaderLink to="/">PostCSS.parts</HeaderLink>
				</Title>
				<Subtitle>A searchable catalog of PostCSS plugins</Subtitle>
			</HeaderWrapper>
    );
}

export default Header;

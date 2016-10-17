import React from 'react';
import styled from 'styled-components';

const VisuallyHidden = (props) => {
	const Hidden = styled(props.component || 'div')`
  	border: 0;
  	clip: rect(0 0 0 0);
  	height: 1px;
  	margin: -1px;
  	overflow: hidden;
  	padding: 0;
  	position: absolute;
  	width: 1px;
	`;

	return <Hidden />;
};

export default VisuallyHidden;

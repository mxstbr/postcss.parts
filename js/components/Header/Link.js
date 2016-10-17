import Link from 'react-router/lib/Link';
import styled from 'styled-components';

import constants from '../../constants';

export default styled(Link)`
	color: ${constants.brandColor};
  text-decoration: none;
`;

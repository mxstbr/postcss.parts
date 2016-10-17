import Link from 'react-router/lib/Link';
import styled from 'styled-components';

import { colors } from '../../constants';

export default styled(Link)`
	color: ${colors.brandColor};
  text-decoration: none;
`;

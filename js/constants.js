import { keyframes } from 'styled-components';

const colors = {
	lightGrey: '#EDEDED',
	midGrey: '#999',
	textColor: '#222',
	maxWidth: '968px',
	brandColor: '#087B98',
	lightBrandColor: '#3C93A9',
};

const animations = {
  spinnerCircle: keyframes`
    0%, 39%, 100% { opacity: 0; }
    40% { opacity: 1; }
  `,
}

export { colors, animations };

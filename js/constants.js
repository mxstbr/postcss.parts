/**
 * Global constants: Colors, animations and plugin tags
 */

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
};

const tags = [
	'analysis',
	'color',
	'debug',
	'extensions',
	'fallbacks',
	'fonts',
	'future',
	'fun',
	'grids',
	'images',
	'media-queries',
	'optimizations',
	'other',
	'pack',
	'sass',
	'shortcuts',
	'svg',
];

export { colors, animations, tags };

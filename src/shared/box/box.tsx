import { type ReactNode } from 'react';

import * as Styled from './box.styled';

interface BoxProps {
	children: ReactNode;
	width: string;
	maxWidth: string;
	height: string;
}

export const Box = ({ children, height, maxWidth, width }: BoxProps) => (
	<Styled.Box height={height} maxWidth={maxWidth} width={width}>
		{children}
	</Styled.Box>
);

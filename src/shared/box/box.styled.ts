import { styled } from 'styled-components';

export const Box = styled.div<{ width: string; maxWidth: string; height: string }>`
	box-sizing: border-box;
	border-radius: 0.5rem;
	box-shadow: var(--box-shadow);
	width: ${({ width }) => width};
	max-width: ${({ maxWidth }) => maxWidth};
	min-height: ${({ height }) => height};
	padding: 4rem;
`;

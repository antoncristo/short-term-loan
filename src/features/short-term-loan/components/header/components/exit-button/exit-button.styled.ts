import { styled } from 'styled-components';

export const Exit = styled.button`
	box-sizing: border-box;
	border: 0.1rem solid transparent;
	width: 3.2rem;
	aspect-ratio: 1/1;
	box-shadow: var(--box-shadow);
	border-radius: 50%;
	background-color: transparent;

	&:hover {
		cursor: pointer;
		border: 0.1rem solid var(--ternary);
	}
`;

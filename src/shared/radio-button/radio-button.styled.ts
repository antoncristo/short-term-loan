import { styled } from 'styled-components';

export const RadioButton = styled.label<{ width: string; isSelected: boolean }>`
	display: inline-block;
	box-sizing: border-box;
	padding: 1rem;
	background-color: var(--secondary);
	min-height: 4rem;
	font-family: 'loan-400';
	font-size: 1.4rem;
	line-height: 1.8rem;
	color: var(--grey1);
	width: ${({ width }) => width};
	border-radius: 0.5rem;
	border: 0.1rem solid
		${({ isSelected }) => (isSelected ? 'var(--main)' : 'var(--ternary)')};

	&:hover {
		cursor: pointer;
		border: 0.1rem solid var(--main);
	}
`;

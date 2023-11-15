import { styled, css } from 'styled-components';

export const Button = styled.button<{
	$variant: 'primary' | 'secondary';
	width: string;
}>`
	width: ${({ width }) => width};
	font-family: 'loan-700';
	font-size: 1.4rem;
	padding: 1.1rem 0;
	border-radius: 0.5rem;
	border: none;
	cursor: pointer;

	&:disabled {
		background-color: var(--grey3);
		color: var(--grey1);
		pointer-events: none;
	}

	${({ $variant }) =>
		$variant === 'primary'
			? css`
					background-color: var(--main);
					color: white;
			  `
			: css`
					background-color: var(--secondary);
					color: var(--main);
			  `}
`;

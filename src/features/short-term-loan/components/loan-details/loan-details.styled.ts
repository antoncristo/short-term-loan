import { styled } from 'styled-components';

export const LoanDetails = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 2.4rem;
`;

export const Title = styled.h2`
	padding: 0;
	margin: 0;
	font-size: 1.6rem;
	font-family: 'loan-600';
	line-height: 2.1rem;
`;

export const LoanInput = styled.input`
	box-sizing: border-box;
	width: 100%;
	max-width: 24rem;
	border: none;
	border-bottom: 0.1rem solid var(--grey1);
	color: var(--grey1);
	padding: 0.6rem 1rem;

	font-size: 1.4rem;
	font-family: 'loan-400';
	line-height: 1.8rem;

	margin-top: 3rem;

	&:focus {
		outline: none;
	}
`;

export const InputLabel = styled.label`
	display: block;
	color: var(--grey1);
	opacity: 0.8;

	font-size: 1.4rem;
	font-family: 'loan-400';
	line-height: 1.8rem;
`;

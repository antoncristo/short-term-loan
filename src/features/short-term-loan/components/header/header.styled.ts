import { styled } from 'styled-components';

export const Header = styled.header`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 10.6rem;
	border-bottom: 0.1rem solid var(--ternary);
	padding: 2.4rem 8rem 2.4rem 2.4rem;
`;

export const Title = styled.h1`
	font-size: 2rem;
	font-family: 'loan-700';
	line-height: 2.6rem;
	height: 2.6rem;
	white-space: nowrap;
`;

export const Steps = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Gap = styled.div`
	width: 4rem;
	height: 0.3rem;
	background-color: var(--ternary);
	margin: 0 2rem;
	margin-bottom: 2rem;
`;

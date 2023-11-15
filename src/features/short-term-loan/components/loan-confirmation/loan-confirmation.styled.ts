import { styled } from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100%;
`;

export const LoanConfirmation = styled.div`
	width: 100vw;
	max-width: 82rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 2.4rem;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	margin-bottom: 3.7rem;
`;

export const Title = styled.h2`
	padding: 0;
	margin: 0;
	font-size: 3rem;
	font-family: 'loan-600';
	line-height: 3.9rem;
	color: black;
`;

export const SubTitle = styled.h2`
	padding: 0;
	margin: 0;
	font-size: 1.4rem;
	font-family: 'loan-200';
	line-height: 1.8rem;
	color: var(--grey1);
`;

export const confirmationContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 2.8rem;
	width: 100%;
`;

export const ConfirmationBox = styled.div`
	box-sizing: border-box;
	width: 100%;
	max-width: 38rem;
	height: 9.4rem;
	border-radius: 1.2rem;
	background-color: var(--secondary);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 2.5rem;
`;

export const CTitle = styled.h3`
	padding: 0;
	margin: 0;
	font-size: 1.2rem;
	font-family: 'loan-300';
	line-height: 1.6rem;
	color: var(--grey1);
	margin-bottom: 0.6rem;
`;

export const CValue = styled.div`
	font-size: 2rem;
	font-family: 'loan-700';
	line-height: 2.6rem;
	color: black;
`;

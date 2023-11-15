import { styled, css } from 'styled-components';

export const CrumbContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 1.2rem;
	min-width: 4rem;
`;

export const StepCrumb = styled.div<{ $isActive: boolean; $isDone: boolean }>`
	box-sizing: border-box;
	width: 2.8rem;
	aspect-ratio: 1/1;
	border-radius: 50%;
	border: 0.2rem solid white;
	background: ${({ $isActive, $isDone }) =>
		$isActive || $isDone
			? `linear-gradient(90.96deg, #6EA6FD -5.23%, #126CF9 111.37%),
linear-gradient(0deg, #FFFFFF, #FFFFFF)`
			: 'var(--grey3)'};
	color: ${({ $isActive, $isDone }) => ($isActive || $isDone ? 'white' : 'var(--grey1)')};
	${({ $isActive, $isDone }) =>
		$isActive &&
		!$isDone &&
		css`
			box-shadow: 0 0 0 0.6rem var(--secondary);
		`}

	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.4rem;
	font-family: 'loan-700';

	transition: all 0.2s ease-in-out;
`;

export const CrumbText = styled.p<{ $isActive: boolean }>`
	margin: 0;
	padding: 0;
	font-size: 1.4rem;
	height: 1.8rem;
	line-height: 1.8rem;
	font-family: ${({ $isActive }) => ($isActive ? 'loan-700' : 'loan-400')};
`;

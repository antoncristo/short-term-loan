import { styled } from 'styled-components';

export const StepControl = styled.div`
	height: calc(100% - var(--header-desktop-height));
	display: flex;
	flex-direction: column;
`;

export const StepContent = styled.div`
	box-sizing: border-box;
	height: calc(100% - 14rem);
	padding-top: 3.7rem;
	overflow-y: auto;
`;

export const Controls = styled.footer<{ isConfirmed: boolean }>`
	box-sizing: border-box;
	padding: 0 3.5rem 0 5rem;
	margin: 0;
	height: 14rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top: 0.1rem solid
		${({ isConfirmed }) => (isConfirmed ? 'var(--secondary)' : 'transparent')};

	@media print {
		display: none;
	}
`;

export const PrintLoan = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.6rem;
	border: none;
	padding: 0.6rem 0.8rem;
	background-color: transparent;

	font-size: 1.4rem;
	font-family: 'loan-700';
	line-height: 1.8rem;
	cursor: pointer;
`;

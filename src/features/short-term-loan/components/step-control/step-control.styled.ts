import { styled } from 'styled-components';

export const StepControl = styled.div`
	height: calc(100% - var(--header-desktop-height));
	display: flex;
	flex-direction: column;
`;

export const StepContent = styled.div`
	height: calc(100% - 14rem);
`;

export const Controls = styled.footer`
	padding: 0 3.5rem 0 5rem;
	margin: 0;
	height: 14rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

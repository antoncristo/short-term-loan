import { Header, StepControl } from './components';

import { steps } from './config';

import * as Styled from './shrot-term-loan.styled';

export const ShortTermLoan = () => (
	<Styled.ShortTermLoan>
		<Header steps={steps} currentStep={2} />
		<StepControl next={() => null} prev={() => null}>
			content
		</StepControl>
	</Styled.ShortTermLoan>
);

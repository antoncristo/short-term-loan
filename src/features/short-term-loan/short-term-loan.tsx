import { useState } from 'react';
import { Header, LoanConfirmation, LoanDetails, StepControl } from './components';

import { steps } from './config';

import * as Styled from './shrot-term-loan.styled';

export const ShortTermLoan = () => {
	const [currentStep, setCurrentStep] = useState<number>(0);

	const nextStepHandler = () => {
		setCurrentStep(prev => prev + 1);
	};

	const prevStepHandler = () => {
		setCurrentStep(prev => prev - 1);
	};

	return (
		<Styled.ShortTermLoan>
			<Header steps={steps} currentStep={currentStep} />
			<StepControl next={nextStepHandler} prev={prevStepHandler}>
				{
					{
						0: <LoanDetails />,
						1: <LoanConfirmation />,
						2: <LoanConfirmation />
					}[currentStep]
				}
			</StepControl>
		</Styled.ShortTermLoan>
	);
};

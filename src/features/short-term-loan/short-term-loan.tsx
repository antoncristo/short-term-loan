import { useState } from 'react';
import { Header, LoanConfirmation, LoanDetails, StepControl } from './components';

import { useForm } from 'react-hook-form';
import { type ShortTermLoan as ShortTermLoanType } from 'features/types';

import { steps } from './config';

import * as Styled from './shrot-term-loan.styled';

export const ShortTermLoan = () => {
	const [currentStep, setCurrentStep] = useState<number>(0);
	const {
		control,
		getValues,
		watch,
		reset,
		formState: { isValid }
	} = useForm<ShortTermLoanType>({
		defaultValues: {
			amount: 10000,
			type: 'one_time',
			payments: {
				depositDate: '10',
				numberOfPayment: '3'
			}
		},
		mode: 'onChange'
	});

	const onReset = () => {
		setCurrentStep(0);
		reset();
	};

	const nextStepHandler = () => {
		setCurrentStep(prev => prev + 1);
	};

	const prevStepHandler = () => {
		setCurrentStep(prev => prev - 1);
	};

	return (
		<Styled.ShortTermLoan>
			<Header steps={steps} currentStep={currentStep} />
			<StepControl
				canSubmit={isValid && currentStep === steps.length - 1}
				currentStep={currentStep}
				isFormValid={isValid}
				next={nextStepHandler}
				prev={prevStepHandler}
				onReset={onReset}
			>
				{
					{
						0: (
							<form>
								<LoanDetails watch={watch} getValues={getValues} control={control} />
							</form>
						),
						1: <LoanConfirmation />,
						2: <LoanConfirmation />
					}[currentStep]
				}
			</StepControl>
		</Styled.ShortTermLoan>
	);
};

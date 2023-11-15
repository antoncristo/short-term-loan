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
				canSubmit={isValid && currentStep === steps.length - 2}
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
						1: (
							<LoanConfirmation
								title='סיכום פרטי ההלוואה'
								subTitle='רגע לפני אישור, אנחנו ממליצים לוודא את פרטי הבקשה'
								loan={getValues()}
							/>
						),
						2: (
							<LoanConfirmation
								title='ההוראה הועברה לסבב חתימות'
								subTitle='אישור 3421 | 21.02.2023, 15:54'
								loan={getValues()}
							/>
						)
					}[currentStep]
				}
			</StepControl>
		</Styled.ShortTermLoan>
	);
};

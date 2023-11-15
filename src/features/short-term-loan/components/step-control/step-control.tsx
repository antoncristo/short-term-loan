import { useState, type ReactNode } from 'react';
import { Button } from 'shared';

import * as Styled from './step-control.styled';

interface StepControlProps {
	children: ReactNode;
	next: () => void;
	prev: () => void;
	isFormValid: boolean;
	canSubmit: boolean;
	onReset: () => void;
	currentStep: number;
}

export const StepControl = (props: StepControlProps) => {
	const { children, prev, next, isFormValid, canSubmit, onReset, currentStep } = props;
	const [done, setDone] = useState(false);

	const onSubmit = () => {
		setDone(true);
	};

	const resetHandler = () => {
		setDone(false);
		onReset();
	};

	return (
		<Styled.StepControl>
			<Styled.StepContent>{children}</Styled.StepContent>
			<Styled.Controls>
				<Button
					disabled={currentStep === 0}
					onClick={prev}
					width='6.9rem'
					variant='secondary'
				>
					חזרה
				</Button>
				{done ? (
					<Button onClick={resetHandler} width='20.9rem' variant='primary'>
						הלוואה נוספת
					</Button>
				) : (
					<Button
						disabled={!isFormValid}
						onClick={canSubmit ? onSubmit : next}
						width='20.9rem'
						variant='primary'
					>
						{canSubmit ? 'אישור' : 'המשך'}
					</Button>
				)}
			</Styled.Controls>
		</Styled.StepControl>
	);
};

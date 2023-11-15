import { type ReactNode } from 'react';
import { Button } from 'shared';

import * as Styled from './step-control.styled';

interface StepControlProps {
	children: ReactNode;
	next: () => void;
	prev: () => void;
}

export const StepControl = (props: StepControlProps) => {
	const { children, prev, next } = props;

	return (
		<Styled.StepControl>
			<Styled.StepContent>{children}</Styled.StepContent>
			<Styled.Controls>
				<Button onClick={prev} width='6.9rem' variant='secondary'>
					חזרה
				</Button>
				<Button onClick={next} width='20.9rem' variant='primary'>
					המשך
				</Button>
			</Styled.Controls>
		</Styled.StepControl>
	);
};

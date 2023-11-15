import { Fragment } from 'react';
import { ExitButton, StepCrumb } from './components';

import * as Styled from './header.styled';

interface HeaderProps {
	steps: readonly string[];
	currentStep: number;
}

export const Header = (props: HeaderProps) => {
	const { steps, currentStep } = props;

	const exitButtonHandler = () => {
		// eslint-disable-next-line
		alert('Exit Portal Action');
	};

	return (
		<Styled.Header>
			<Styled.Title>הלוואה לזמן קצר</Styled.Title>
			<Styled.Steps>
				{steps.map((step, index) => (
					<Fragment key={step + index}>
						<StepCrumb
							isActive={currentStep === index}
							isDone={currentStep > index}
							index={index}
							crumbText={step}
						/>
						{index < steps.length - 1 ? <Styled.Gap /> : null}
					</Fragment>
				))}
			</Styled.Steps>
			<ExitButton onClick={exitButtonHandler} />
		</Styled.Header>
	);
};

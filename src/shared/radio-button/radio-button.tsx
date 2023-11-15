import { type InputHTMLAttributes } from 'react';

import * as Styled from './radio-button.styled';

interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	width: string;
	label: string;
	isSelected: boolean;
}

export const RadioButton = (props: RadioButtonProps) => {
	const { label, width, isSelected, ...rest } = props;
	const thisId = crypto.randomUUID();

	return (
		<>
			<Styled.RadioButton htmlFor={thisId} isSelected={isSelected} width={width}>
				{label}
			</Styled.RadioButton>
			<input id={thisId} {...rest} type='radio' hidden />
		</>
	);
};

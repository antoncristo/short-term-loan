import { type ButtonHTMLAttributes } from 'react';
import { XIcon } from 'assets/icons';

import * as Styled from './exit-button.styled';

interface ExitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ExitButton = (props: ExitButtonProps) => (
	<Styled.Exit {...props}>
		<XIcon />
	</Styled.Exit>
);

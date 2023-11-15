import { type ReactNode, type ButtonHTMLAttributes } from 'react';

import * as Styled from './button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	width: string;
	variant: 'primary' | 'secondary';
}

export const Button = ({ children, variant, width, ...rest }: ButtonProps) => (
	<Styled.Button $variant={variant} width={width} {...rest}>
		{children}
	</Styled.Button>
);

import { LoanDetails } from './components';

export enum LoanSteps {
	DETAILS,
	CONFIRMATION,
	SIGNATURES
}

export const steps = ['מילוי פרטים', 'אישור', 'מעבר לחתימות'] as const;

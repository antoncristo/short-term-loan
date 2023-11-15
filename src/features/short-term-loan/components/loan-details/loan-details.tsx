import { Box, RadioButton } from 'shared';
import { type DepositDate, type LoanMethod, type NumberOfPayments } from 'features/types';

import * as Styled from './loan-details.styled';

export const LoanDetails = () => {
	const numOfPayments: NumberOfPayments[] = [3, 6, 9, 12];
	const mockSelectedNumOfPayments = 3;
	const loanMethod: LoanMethod[] = ['payments', 'one_time'];
	const mapLoanMethodToHebrew: Record<LoanMethod, string> = {
		one_time: 'חד פעמי (בולט)',
		payments: 'תשלומים'
	};
	const mockLoanMethod: LoanMethod = 'payments';
	const depositDate: DepositDate[] = [10, 15, 20];
	const mockDepositDate = 10;
	// eslint-disable-next-line
	// @ts-ignore
	const showPaymentsMeta = mockLoanMethod === 'payments';

	return (
		<Styled.LoanDetails>
			<Box width='100%' maxWidth='78.1rem' height='17.4rem'>
				<Styled.Title>מה סכום ההלוואה הדרוש לך?</Styled.Title>
				<Styled.LoanInput type='number' placeholder='10000' />
				<Styled.InputLabel>סכום מינימלי 10,000 שח</Styled.InputLabel>
			</Box>
			<Box width='100%' maxWidth='78.1rem' height='17.4rem'>
				<Styled.Title>מה המסלול המועדף עלייך לתשלום ההלוואה?</Styled.Title>
				<Styled.RadioButtonGroup>
					{loanMethod.map(lm => (
						<RadioButton
							name='lm'
							value={lm}
							key={lm}
							isSelected={mockLoanMethod === lm}
							label={mapLoanMethodToHebrew[lm]}
							width='15.7rem'
						/>
					))}
				</Styled.RadioButtonGroup>
			</Box>
			{showPaymentsMeta ? (
				<>
					<Box width='100%' maxWidth='78.1rem' height='22.4rem'>
						<Styled.Title>לכמה תשלומים לחלק את ההלוואה ?</Styled.Title>
						<Styled.RadioButtonGroup>
							{numOfPayments.map(nop => (
								<RadioButton
									name='nop'
									value={nop}
									key={nop}
									isSelected={mockSelectedNumOfPayments === nop}
									label={`${nop} תשלומים`}
									width='15.7rem'
								/>
							))}
						</Styled.RadioButtonGroup>
					</Box>
					<Box width='100%' maxWidth='78.1rem' height='22.4rem'>
						<Styled.Title>באיזה יום בחודש יהיה לך נוח לשלם את ההחזר ?</Styled.Title>
						<Styled.RadioButtonGroup>
							{depositDate.map(dd => (
								<RadioButton
									name='dd'
									value={dd}
									key={dd}
									isSelected={mockDepositDate === dd}
									label={`${dd} לחודש`}
									width='15.7rem'
								/>
							))}
						</Styled.RadioButtonGroup>
					</Box>
				</>
			) : null}
		</Styled.LoanDetails>
	);
};

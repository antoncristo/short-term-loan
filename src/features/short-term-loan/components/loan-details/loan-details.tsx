import { Box, RadioButton } from 'shared';
import {
	type ShortTermLoan,
	type DepositDate,
	type LoanMethod,
	type NumberOfPayments
} from 'features/types';
import {
	type Control,
	Controller,
	type UseFormGetValues,
	type UseFormWatch
} from 'react-hook-form';

import * as Styled from './loan-details.styled';

interface LoanDetailsProps {
	control: Control<ShortTermLoan, unknown>;
	getValues: UseFormGetValues<ShortTermLoan>;
	watch: UseFormWatch<ShortTermLoan>;
}

export const LoanDetails = (props: LoanDetailsProps) => {
	const { control, getValues, watch } = props;
	const numOfPayments: NumberOfPayments[] = ['3', '6', '9', '12'];
	const numOfPaymentsState = getValues('payments.numberOfPayment');
	const loanMethod: LoanMethod[] = ['payments', 'one_time'];
	const mapLoanMethodToHebrew: Record<LoanMethod, string> = {
		one_time: 'חד פעמי (בולט)',
		payments: 'תשלומים'
	};
	const loanMethodState: LoanMethod = getValues('type');
	const depositDate: DepositDate[] = ['10', '15', '20'];
	const depositDateState = getValues('payments.depositDate');
	const showPaymentsMeta = getValues('type') === 'payments';
	watch();

	return (
		<Styled.LoanDetails>
			<Box width='100%' maxWidth='78.1rem' height='17.4rem'>
				<Styled.Title>מה סכום ההלוואה הדרוש לך?</Styled.Title>
				<Controller
					name='amount'
					control={control}
					rules={{ required: true, min: 10000 }}
					render={({ field }) => (
						<Styled.LoanInput {...field} type='number' placeholder='10000' />
					)}
				/>
				<Styled.InputLabel>סכום מינימלי 10,000 שח</Styled.InputLabel>
			</Box>
			<Box width='100%' maxWidth='78.1rem' height='17.4rem'>
				<Styled.Title>מה המסלול המועדף עלייך לתשלום ההלוואה?</Styled.Title>
				<Styled.RadioButtonGroup>
					{loanMethod.map(lm => (
						<Controller
							key={lm}
							name='type'
							control={control}
							render={({ field }) => (
								<RadioButton
									{...field}
									name='lm'
									value={lm}
									isSelected={loanMethodState === lm}
									label={mapLoanMethodToHebrew[lm]}
									width='15.7rem'
								/>
							)}
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
								<Controller
									key={nop}
									name='payments.numberOfPayment'
									control={control}
									render={({ field }) => (
										<RadioButton
											{...field}
											name='nop'
											value={nop}
											isSelected={numOfPaymentsState === nop}
											label={`${nop} תשלומים`}
											width='15.7rem'
										/>
									)}
								/>
							))}
						</Styled.RadioButtonGroup>
					</Box>
					<Box width='100%' maxWidth='78.1rem' height='22.4rem'>
						<Styled.Title>באיזה יום בחודש יהיה לך נוח לשלם את ההחזר ?</Styled.Title>
						<Styled.RadioButtonGroup>
							{depositDate.map(dd => (
								<Controller
									key={dd}
									name='payments.depositDate'
									control={control}
									render={({ field }) => (
										<RadioButton
											{...field}
											name='dd'
											value={dd}
											isSelected={depositDateState === dd}
											label={`${dd} לחודש`}
											width='15.7rem'
										/>
									)}
								/>
							))}
						</Styled.RadioButtonGroup>
					</Box>
				</>
			) : null}
		</Styled.LoanDetails>
	);
};

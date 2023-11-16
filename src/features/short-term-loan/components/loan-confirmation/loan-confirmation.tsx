import { type LoanMethod, type ShortTermLoan } from 'features/types';

import * as Styled from './loan-confirmation.styled';

interface LoanConfirmationProps {
	title: string;
	subTitle: string;
	loan: ShortTermLoan;
}

export const LoanConfirmation = (props: LoanConfirmationProps) => {
	const { loan, subTitle, title } = props;
	const { amount, type, payments } = loan;
	const mapLoanMethodToHebrew: Record<LoanMethod, string> = {
		one_time: 'חד פעמי (בולט)',
		payments: 'תשלומים'
	};

	console.log(loan);

	const showPaymentsMeta = loan.type === 'payments';

	return (
		<Styled.Container>
			<Styled.LoanConfirmation>
				<Styled.Header>
					<Styled.Title>{title}</Styled.Title>
					<Styled.SubTitle>{subTitle}</Styled.SubTitle>
				</Styled.Header>
				<Styled.confirmationContainer>
					<Styled.ConfirmationBox>
						<Styled.CTitle>סכום ההלוואה</Styled.CTitle>
						<Styled.CValue>{amount} שח</Styled.CValue>
					</Styled.ConfirmationBox>
					<Styled.ConfirmationBox>
						<Styled.CTitle>מסלול</Styled.CTitle>
						<Styled.CValue>{mapLoanMethodToHebrew[type]}</Styled.CValue>
					</Styled.ConfirmationBox>
					{showPaymentsMeta ? (
						<>
							<Styled.ConfirmationBox>
								<Styled.CTitle>מספר תשלומים</Styled.CTitle>
								<Styled.CValue>{payments?.numberOfPayment} תשלומים</Styled.CValue>
							</Styled.ConfirmationBox>
							<Styled.ConfirmationBox>
								<Styled.CTitle>תאריך פירעון</Styled.CTitle>
								<Styled.CValue>{payments?.depositDate} לכל חודש</Styled.CValue>
							</Styled.ConfirmationBox>
						</>
					) : null}
				</Styled.confirmationContainer>
			</Styled.LoanConfirmation>
		</Styled.Container>
	);
};

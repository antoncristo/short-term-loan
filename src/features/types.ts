export type LoanMethod = 'one_time' | 'payments';

export type NumberOfPayments = '3' | '6' | '9' | '12';
export type DepositDate = '10' | '15' | '20';

export interface PaymentsMeta {
	numberOfPayment: NumberOfPayments;
	depositDate: DepositDate;
}

export interface ShortTermLoan {
	amount: number;
	type: LoanMethod;
	payments: undefined | PaymentsMeta;
}

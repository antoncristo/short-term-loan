export type LoanMethod = 'one_time' | 'payments';

export interface PaymentsMeta {
	numberOfPayment: 3 | 6 | 9 | 12;
	depositDate: 10 | 15 | 20;
}

export interface ShortTermLoan {
	amount: number;
	type: LoanMethod;
	payments: undefined | PaymentsMeta;
}

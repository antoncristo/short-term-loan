import { Box } from 'shared';

import * as Styled from './loan-details.styled';

export const LoanDetails = () => (
	<Styled.LoanDetails>
		<Box width='100%' maxWidth='78.1rem' height='17.4rem'>
			<Styled.Title>מה סכום ההלוואה הדרוש לך?</Styled.Title>
			<Styled.LoanInput type='number' placeholder='10000' />
			<Styled.InputLabel>סכום מינימלי 10,000 שח</Styled.InputLabel>
		</Box>
		<Box width='100%' maxWidth='78.1rem' height='17.4rem'>
			<Styled.Title>מה המסלול המועדף עלייך לתשלום ההלוואה?</Styled.Title>
		</Box>
		<Box width='100%' maxWidth='78.1rem' height='22.4rem'>
			<Styled.Title>לכמה תשלומים לחלק את ההלוואה ?</Styled.Title>
		</Box>
		<Box width='100%' maxWidth='78.1rem' height='22.4rem'>
			<Styled.Title>באיזה יום בחודש יהיה לך נוח לשלם את ההחזר ?</Styled.Title>
		</Box>
	</Styled.LoanDetails>
);

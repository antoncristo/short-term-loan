import * as Styled from './step-crumb.styled';

interface StepCrumbProps {
	isActive: boolean;
	isDone: boolean;
	crumbText: string;
	index: number;
}

export const StepCrumb = (props: StepCrumbProps) => {
	const { crumbText, index, isActive, isDone } = props;

	return (
		<Styled.CrumbContainer>
			<Styled.StepCrumb $isDone={isDone} $isActive={isActive}>
				{index + 1}
			</Styled.StepCrumb>
			<Styled.CrumbText $isActive={isActive}>{crumbText}</Styled.CrumbText>
		</Styled.CrumbContainer>
	);
};

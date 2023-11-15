import { render, screen } from '@testing-library/react';

describe('Example component', () => {
	test('renders correctly', () => {
		render(<div data-testid='id-example-2'>Title</div>);
		const component = screen.getByTestId('id-example-2');
		expect(component).toBeInTheDocument();
	});
});

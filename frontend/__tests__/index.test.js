import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

test('renders title', () => {
  render(<Home />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
});
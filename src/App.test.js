import { render, screen } from '@testing-library/react';
import App from './App';

test('pokedex', () => {
  render(<App />);
  const linkElement = screen.getByText(/pokedex/i);
  expect(linkElement).toBeInTheDocument();
});

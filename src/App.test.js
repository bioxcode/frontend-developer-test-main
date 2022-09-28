import { render, screen } from '@testing-library/react';
import App from './App';

describe(App, () => {
  test('renders app title link', () => {
    render(<App />);
    const titleElement = screen.getByText(/Todo App/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('render Clear All button', () => {
    render(<App />);
    const clearAllElement = screen.getByTestId('clear-all');
    expect(clearAllElement).toBeInTheDocument();
    expect(clearAllElement.textContent).toEqual('Clear All');
  })

})

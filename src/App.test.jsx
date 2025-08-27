import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import App from './App';

afterEach(() => {
  cleanup();
});

describe('App', () => {

  it('should return $12.50 for Tip Amount and $62.50 for Total when bill is $100, tip is 25%, and people is 2', async () => {
    render(<App />);

    const bill = screen.getByLabelText(/bill/i);
    const tip = screen.getByText('25%');
    const people = screen.getByLabelText(/number of people/i);

    await userEvent.type(bill, '100');
    await userEvent.click(tip);
    await userEvent.type(people, '2');

    await waitFor(async () => {
      const tipAmount = await screen.findByTestId('tip-amount');
      const totalAmount = await screen.findByTestId('total-amount');
  
      expect(tipAmount).toHaveTextContent('12.50');
      expect(totalAmount).toHaveTextContent('62.50');
    });
  });

  it('should reset the form values when the reset button is clicked', async () => {
    render(<App />);

    const bill = screen.getByLabelText(/bill/i);
    const tip = screen.getByText('25%');
    const people = screen.getByLabelText(/number of people/i);
    const tipAmount = screen.getByTestId('tip-amount');
    const totalAmount = screen.getByTestId('total-amount');

    await userEvent.type(bill, '100');
    await userEvent.click(tip);
    await userEvent.type(people, '2');

    const resetBtn = screen.getByTestId('reset-btn');
    await userEvent.click(resetBtn);

    expect(bill.value).toBe('');
    expect(tip).not.toHaveClass('active');
    expect(people.value).toBe('');
    expect(tipAmount.textContent).toBe('0.00');
    expect(totalAmount.textContent).toBe('0.00');
  });
})

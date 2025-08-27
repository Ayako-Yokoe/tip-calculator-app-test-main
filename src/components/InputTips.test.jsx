import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import InputTips from './InputTips';
import App from "../App";

afterEach(() => {
  cleanup();
});

describe('InputTips', () => {
  //Bill
  it('sets the bill to 10 when a user types 10.00', async () => {
    const mockSetBill = vi.fn();
    render(<InputTips bill={10.00} setBill={mockSetBill} />);

    const billAmount = screen.getByLabelText(/bill/i);
    userEvent.type(billAmount, '10.00');
    await waitFor(() => {
      expect(billAmount.value).toBe('10');
    });
  });

  it('sets the bill to 123.45 when a user types 123.45', async () => {
    const mockSetBill = vi.fn();
    render(<InputTips bill={123.45} setBill={mockSetBill} />);

    const billAmount = screen.getByLabelText(/bill/i);
    userEvent.type(billAmount, '123.45');
    await waitFor(() => {
      expect(billAmount.value).toBe('123.45');
    });
  });

  // Select Tips
  it('sets the tip to the selected amount and adds the active class', async () => {
    render(<App />)

    const tipButton = screen.getByText('25%');
    userEvent.click(tipButton);

    const activeTipItem = screen.getByText('25%').closest('li');
    await waitFor(() => {
      expect(activeTipItem).toHaveClass('active');
    })
  });

  it('sets the custom tip to 40 when a user types 40', async () => {
    const mockSetCustomTip = vi.fn();
    render(<InputTips customTip={40} setCustomTip={mockSetCustomTip} />);

    const enableButton = screen.getByText('Custom');
    userEvent.click(enableButton);
    const customTipAmount = await screen.findByTestId('custom-tip-amount');
    userEvent.type(customTipAmount, '40');

    await waitFor(() => {
      expect(customTipAmount.value).toBe('40');
    })
  });

  // People
  it('sets the number of people to 5 when a user types 5', async () => {
    const mockSetPeople = vi.fn();
    render(<InputTips people={5} setPeople={mockSetPeople} />);

    const numOfPeople = screen.getByLabelText(/number of people/i);
    userEvent.type(numOfPeople, '5');
    await waitFor(() => {
      expect(numOfPeople.value).toBe('5');
    })
  });

  it('shows an error message when a user types 0', async () => {
    const mockSetPeople = vi.fn();
    render(<InputTips people={0} setPeople={mockSetPeople} errorForPeople={"Can't be zero"} />);
    const numOfPeople = screen.getByLabelText(/number of people/i);
    const errorMessage = screen.getByTestId('error-message');

    userEvent.type(numOfPeople, '0');
    await waitFor(() => {
      expect(errorMessage.textContent).toBe("Can't be zero");
    })
  })
})
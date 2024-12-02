import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
	render(<App />); // 앱 컴포넌트 랜더링
	const countElement = screen.getByTestId('counter');
	// expect(countElement).toBe(0); // Fail
  expect(countElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App />); 
  const buttonElement = screen.getByTestId('minus-button');
  expect(buttonElement).toHaveTextContent('-');
});

test('plus button has correct text', () => {
  render(<App />); 
  const buttonElement = screen.getByTestId('plus-button');
  expect(buttonElement).toHaveTextContent('+');
});

test('when the + button is pressed, the counter changes to 1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  fireEvent.click(buttonElement);

  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(1);
})

test('when the - button is pressed, the counter changes to -1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('minus-button');
  fireEvent.click(buttonElement);

  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(-1);
})

test('on/off button has blue color', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('on/off-button');
  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
})

test('prevent the -,+ button from being pressed when the on/off button is clicked', () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId('on/off-button');
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId('plus-button');
  expect(plusButtonElement).toBeDisabled();
})
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('should render without crashing', () => {
  render(<App />)

  expect(screen.getByRole("heading"));
  expect(screen.getByRole("link", { name: "Home" })).toBeEnabled();
  expect(screen.getByRole("img", {name : "logo"})).toBeInTheDocument();


});

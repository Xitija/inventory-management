import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// https://www.ascm.org/globalassets/00_blog/images/22---calculate-manage-inventory-range-main.jpg
// https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2022/12/19222908/Inventory-Management-Techniques-Methods.png
// https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2022/12/19222908/Inventory-Management-Techniques-Methods.png
// https://quickbooks.intuit.com/r/midsize-business/inventory-analysis-methods-strategies-and-procedures/
// date is to be maintained globally
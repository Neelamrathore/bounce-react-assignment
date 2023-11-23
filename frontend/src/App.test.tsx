import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/Dashboard';

test('renders App component', () => {
  render(
    <Router>
 <Dashboard/>
    </Router>
  );

  
  const headingElement = screen.getByRole('heading', { name: 'Search Country' });


  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveClass('text-base font-semibold leading-7 text-gray-900');
 
  
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';  // Adjust path if needed

describe('App Component', () => {
  
  it('renders the Heading components correctly', () => {
    render(<App />);
    
    // Check that the H1 and H2 headings are rendered with the correct text
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Главный заголовок (H1)');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Подзаголовок (H2)');
  });

  it('renders the Paragraph component correctly', () => {
    render(<App />);
    
    // Check that the paragraph is rendered with the correct text
    expect(screen.getByText('Текстовый блок')).toBeInTheDocument();
  });

  it('renders the Spacer component', () => {
    render(<App />);
    
    // Check if the Spacer component (hr) is rendered
    const spacer = screen.getByRole('separator');
    expect(spacer).toBeInTheDocument();
  });

});

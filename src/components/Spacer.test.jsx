import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Spacer from './Spacer';  

describe('Spacer component', () => {
  it('renders correctly with default styles', () => {
    const { container } = render(<Spacer />);
    
    const spacer = container.querySelector('hr');
    expect(spacer).toBeInTheDocument();
    expect(spacer).toHaveClass('spacer');
    expect(spacer).toHaveStyle('background-color: #ccc');
    expect(spacer).toHaveStyle('height: 1px');
    expect(spacer).toHaveStyle('margin: 16px 0');
  });

  it('applies the custom color prop correctly', () => {
    const { container } = render(<Spacer color="red" />);
    
    const spacer = container.querySelector('hr');
    expect(spacer).toHaveStyle('background-color: red');
  });

  it('applies the custom height prop correctly', () => {
    const { container } = render(<Spacer height="5px" />);
    
    const spacer = container.querySelector('hr');
    expect(spacer).toHaveStyle('height: 5px');
  });

  it('applies the custom margin prop correctly', () => {
    const { container } = render(<Spacer margin="20px 0" />);
    
    const spacer = container.querySelector('hr');
    expect(spacer).toHaveStyle('margin: 20px 0');
  });

  it('applies all custom props correctly', () => {
    const { container } = render(<Spacer color="blue" height="2px" margin="10px 0" />);
    
    const spacer = container.querySelector('hr');
    expect(spacer).toHaveStyle('background-color: blue');
    expect(spacer).toHaveStyle('height: 2px');
    expect(spacer).toHaveStyle('margin: 10px 0');
  });
});

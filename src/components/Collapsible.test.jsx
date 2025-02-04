import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Collapsible from './Collapsible';  

describe('Collapsible component', () => {

  it ('applies the large size class', () => {
    render(<Collapsible title="Large Size" size="large">Some content</Collapsible>);
    expect(screen.getByText(/Large Size/i).closest('div')).toHaveClass('collapsible-large');
  });

  it ('does not apply large size class when size is not large', () => {
    render(<Collapsible title="Small Size" size="small">Some content</Collapsible>);
    expect(screen.getByText(/Small Size/i).closest('div')).not.toHaveClass('collapsible-large');
  });
});

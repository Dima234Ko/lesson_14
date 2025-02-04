import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from './Heading'; 

describe('Heading component', () => {
  it('renders with the correct tag based on the level prop', () => {
    const { container } = render(<Heading level={1}>Heading 1</Heading>);
    expect(container.querySelector('h1')).toBeInTheDocument();

    const { container: container2 } = render(<Heading level={2}>Heading 2</Heading>);
    expect(container2.querySelector('h2')).toBeInTheDocument();

    const { container: container3 } = render(<Heading level={3}>Heading 3</Heading>);
    expect(container3.querySelector('h3')).toBeInTheDocument();
  });

  it('renders the correct children', () => {
    const { getByText } = render(<Heading level={1}>Test Heading</Heading>);
    expect(getByText('Test Heading')).toBeInTheDocument();
  });

  it('applies the style prop correctly', () => {
    const { getByText } = render(<Heading level={1} style={{ color: 'red' }}>Styled Heading</Heading>);
    const heading = getByText('Styled Heading');
    expect(heading).toHaveStyle('color: red');
  });
});

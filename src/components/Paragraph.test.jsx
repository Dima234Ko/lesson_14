import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Paragraph from './Paragraph';  

describe('Paragraph component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Paragraph>Test paragraph content</Paragraph>);
    
    const paragraph = getByText('Test paragraph content');
    expect(paragraph).toBeInTheDocument();
  });

  it('renders an empty paragraph when no children are provided', () => {
    const { container } = render(<Paragraph />);
    
    const paragraph = container.querySelector('p');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toBeEmptyDOMElement(); 
  });

  it('renders a paragraph with HTML elements as children', () => {
    const { getByText } = render(
      <Paragraph>
        This is a <strong>test</strong> paragraph.
      </Paragraph>
    );
    
    const strongText = getByText('test');
    expect(strongText).toBeInTheDocument();
    expect(strongText.tagName).toBe('STRONG');
  });

  it('renders a paragraph with nested components as children', () => {
    const { getByText } = render(
      <Paragraph>
        <span>Wrapped text in span</span>
      </Paragraph>
    );
    
    const spanText = getByText('Wrapped text in span');
    expect(spanText).toBeInTheDocument();
    expect(spanText.tagName).toBe('SPAN');
  });
});

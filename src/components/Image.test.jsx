import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Image from './Image';  // adjust path if necessary

describe('Image component', () => {
  it('renders an image with the correct src and alt attributes', () => {
    const { getByAltText } = render(<Image src="https://example.com/image.jpg" alt="Example image" />);
    
    const image = getByAltText('Example image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(image).toHaveAttribute('alt', 'Example image');
  });

  it('renders an image without alt text when no alt prop is provided', () => {
    const { container } = render(<Image src="https://example.com/image.jpg" />);
    
    const image = container.querySelector('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(image).not.toHaveAttribute('alt'); 
  });

  it('renders an image without src when no src prop is provided', () => {
    const { container } = render(<Image alt="No source image" />);
    
    const image = container.querySelector('img');
    expect(image).toBeInTheDocument();
    expect(image).not.toHaveAttribute('src');
    expect(image).toHaveAttribute('alt', 'No source image');
  });

  it('renders correctly with an empty alt prop', () => {
    const { container } = render(<Image src="https://example.com/image.jpg" alt="" />);
    
    const image = container.querySelector('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(image).toHaveAttribute('alt', ''); 
  });
});

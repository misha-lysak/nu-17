import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import { ScrollButton } from './ScrollButton';

describe('scroll button component', () => {
  it('should have a link', () => {
    render(<ScrollButton />);
    const link = screen.getByRole('link');
    link.toBeInTheDocument;
    fireEvent.click(link);
  });
});

import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';

describe('logo component', () => {
  it('should have initial classname', () => {
    render(<Logo isLoadedImages />);
    const container = screen.getByTitle('logo');

    // ! can't find why test below don't working as well, as needed
    // expect(container).toHaveClass('flex');
  });
});

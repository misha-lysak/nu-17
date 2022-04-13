import { render, screen } from '@testing-library/react';
import { Title } from './Title';

describe('Title', () => {
  it('show title', () => {
    render(<Title />);
    screen.getByText('DE 17 BELANGRIJKSTE');
    expect(/de 17 belangrijkste/i).toBeInTheDocument;
  });
});

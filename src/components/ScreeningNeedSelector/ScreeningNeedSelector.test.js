import React from 'react';
import { TWO_NEEDS } from 'staticData';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import ScreeningNeedSelector from './ScreeningNeedSelector';

// Clicks the Create Referrals buttom.
const clickSubmit = () => fireEvent.click(screen.getByText('Create Referrals'));

describe('ScreeningNeedSelector', () => {
  afterEach(cleanup);

  it('renders text header, body text, checkboxes and a submit button', () => {
    render(<ScreeningNeedSelector needs={TWO_NEEDS} />);
    // Confirm header has rendered.
    expect(screen.getByText('Suggested Referrals')).toBeInTheDocument();
    // Confirm content has rendered.
    expect(screen.getByText(content => (
      content.startsWith('This client has been determined to have the following needs')
    ))).toBeInTheDocument();
    // Confirm submit button has rendered.
    expect(screen.getByRole('button')).toHaveTextContent('Create Referrals');
  });

  it('disables the submit button after de-selecting all checkboxes', () => {
    const onSubmit = jest.fn();
    // Initially check each checkbox w/ initiallyChecked prop
    render(<ScreeningNeedSelector initiallyChecked needs={TWO_NEEDS} onSubmit={onSubmit} />);

    // Deselect each need checkbox.
    fireEvent.click(screen.getByText('Health'));
    fireEvent.click(screen.getByText('Benefits'));

    // Click the disabled button and it should NOT call onSubmit
    clickSubmit();
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it('submits form with needs when 1 need is checked', () => {
    const onSubmit = jest.fn();
    // Render with checkboxes not initially checked.
    render(<ScreeningNeedSelector needs={TWO_NEEDS} onSubmit={onSubmit} />);

    // Confirm the submit button is disabled
    clickSubmit();
    expect(onSubmit).toHaveBeenCalledTimes(0);

    // Select the health checkbox
    fireEvent.click(screen.getByText('Health'));

    // Click the button that should now be enabled and call onSubmit
    clickSubmit();
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('defaults to text for a low-risk client', () => {
    render(<ScreeningNeedSelector />);
    expect(screen.queryByTestId('high-risk-fragment')).toBeNull();
  });

  it('renders the correct text if the client is high risk', () => {
    // eslint-disable-next-line react/jsx-boolean-value
    render(<ScreeningNeedSelector isHighRisk={true} />);
    expect(screen.queryByTestId('high-risk-fragment')).toBeTruthy();
  });

  it('renders the correct text if the client is not high risk', () => {
    render(<ScreeningNeedSelector isHighRisk={false} />);
    expect(screen.queryByTestId('high-risk-fragment')).toBeNull();

  });
});

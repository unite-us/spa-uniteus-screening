import getAddressString from './getAddressString';
import {
  MOCK_PROVIDERS,
} from 'staticData';

describe('getAddressString', () => {
  it('return an empty string if an address is not found', () => {
    expect(getAddressString()).toBe('');
    expect(getAddressString({})).toBe('');
    expect(getAddressString(MOCK_PROVIDERS[0].addresses[0]))
      .not.toBe('');
    expect(getAddressString({ line_1: '', line_2: '', city: '', state: '', postal_code: '' }))
      .toBe('');
  });

  it('return an address in a formatted string', () => {
    expect(getAddressString(MOCK_PROVIDERS[0].addresses[0]))
      .toBe('403 West 40th St., Ney York, NY 10018');

    expect(getAddressString({ state: 'ny' }))
      .toBe('ny');

    expect(getAddressString({ city: 'new york', postal_code: '11363' }))
      .toBe('new york, 11363');

    expect(getAddressString({ line_1: '123 Something Street', line_2: 'Apt. 333' }))
      .toBe('123 Something Street Apt. 333');
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import WebsiteUrl from './WebsiteUrl';

describe('WebsiteUrl', () => {
  const props = {
    provider: {
      id: '1',
      website_url: 'www.test.me',
    },
  };

  it('returns null if nothing is passed in', () => {
    const comp = shallow(<WebsiteUrl />);

    expect(comp.type()).toBeNull();
  });

  it('returns a link for the provider website', () => {
    const comp = shallow(<WebsiteUrl {...props} />);
    const link = comp.find('a');

    expect(link).toHaveLength(1);
    expect(link.text()).toBe('www.test.me');
  });


  it('returns a span for the provider website if noLink is true', () => {
    const comp = shallow(<WebsiteUrl {...props}  noLink={true} />);
    const span = comp.find('span');

    expect(comp.find('a')).toHaveLength(0);
    expect(span).toHaveLength(1);
    expect(span.text()).toBe('www.test.me');
  });
});

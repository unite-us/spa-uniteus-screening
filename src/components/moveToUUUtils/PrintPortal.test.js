import React from 'react';
import { mount } from 'enzyme';
import PrintPortal from './PrintPortal';
import WebsiteUrl from './WebsiteUrl';

// adding this for the portal test, needed to attach to
document.body.innerHTML =
  '<div>' +
  '  <div id="portal" />' +
  '</div>';

const portal = document.getElementById('portal');

// The portal expects a node so let's give it one
const node = <WebsiteUrl provider={{ website_url: 'www.test.me' }} />;

describe('PrintPortal', () => {
  const props = {
    children: node,
    googleMapsApiKey: '123&son',
  };

  it('renders Website Url in document body', () => {
    // http://airbnb.io/enzyme/docs/api/ReactWrapper/mount.html#mount--self
    // use attachTo to put this in the jsdom document when rendering
    // mount returns a ReactWrapper
    const comp = mount(<PrintPortal {...props} />, {
      attachTo: portal,
    });
    const spy = jest.spyOn(comp.instance(), 'renderPortal');

    // remounts the component to hit the componentDidMount lifecycle with the spy listening
    comp.mount();

    // the portal renders the child in the document but nothing in it's render, it is an empty render
    // so we need to check the document.body to see if there is a node there of the child passed in
    expect(document.body.getElementsByClassName('website-url')).toHaveLength(1);

    // the spy was called --- woo hoo!
    expect(spy) .toHaveBeenCalledTimes(1);

    // unmount to clean up and to restore the spy, hopefully no mem leaks
    comp.unmount();
    spy.mockRestore();
  });
});

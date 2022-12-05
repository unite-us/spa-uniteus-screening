import React, { useState } from 'react';
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import ServiceProviders from './components/ServiceProviders';
import {
  NEEDS,
  MOCK_FORM,
  TWO_NEEDS,
} from './staticData';
import {
  ScreeningForm,
  ScreeningNeedSelector,
} from './components';
import './stylesheets/main.scss';

export default function Root(props){
    const [selectedProviders, setSelectedProviders] = useState([]);
  
    const getSelectedProviders = (selectedProviders) =>{
        this.setState({ selectedProviders }, () => {
          console.log(this.selectedProviders);
        });
      }
    return (
        <div className="App container-fluid">
          <header className="App-header">
            <h1 className="App-title">Unite Us Screening</h1>
            <p className="App-intro">
              This is a local presentation of the various screening components.
            </p>
          </header>
  
          <div className="examples">
            <h1 className="example-title">ScreeningNeedSelector</h1>
            <div className="example-content">
              <ScreeningNeedSelector
                initiallyChecked
                needs={TWO_NEEDS}
                onSubmit={checked => console.info('submitted the following needs:', checked)}
              />
            </div>
            <hr />
  
            <h1 className="example-title">ServiceProviders</h1>
            <div className="example-content">
              <ServiceProviders
                needs={NEEDS}
              />
            </div>
          </div>
        </div>
      );
}


// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {}

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Root,
    errorBoundary(err, info, props) {
      // Customize the root error boundary for your microfrontend here.
      return null;
    },
  });
  
  export const { bootstrap, mount, unmount } = lifecycles;
  
  
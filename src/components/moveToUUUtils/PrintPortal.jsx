import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class PrintPortal extends Component {
  componentDidMount() {
    this.renderPortal();
  }

  componentDidUpdate() {
    this.renderPortal();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.defaultNode || this.props.node);
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }
    this.defaultNode = null;
    this.portal = null;
  }

  renderPortal() {
    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }

    let { children } = this.props;
    // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
    if (typeof this.props.children.type === 'function') {
      children = React.cloneElement(this.props.children);
    }

    this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      children,
      this.props.node || this.defaultNode,
    );
  }

  render() {
    return null;
  }
}

PrintPortal.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any,
};

PrintPortal.defaultProps = {
  node: null,
};

export default PrintPortal;

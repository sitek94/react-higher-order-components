import * as React from 'react';
import { info } from '../helpers/logger';

/**
 * Extremely simple example of higher-order component
 */
export function withLogger(WrappedComponent, name) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      info(`${name} did mount!`);
    }

    componentWillUnmount() {
      info(`${name} will unmount!`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

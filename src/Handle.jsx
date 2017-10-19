import React from 'react';
import PropTypes from 'prop-types';

export default class Handle extends React.Component {
  render() {
    const { className, vertical, offset } = this.props;

    const style = vertical ? { bottom: `${offset}%` } : { left: `${offset}%` };
    return <div className={className} style={style} />;
  }
}

Handle.propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
  offset: PropTypes.number,
};

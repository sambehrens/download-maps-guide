import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    onClick: PropTypes.func,
    kind: PropTypes.oneOf(['primary', 'secondary']),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    type: PropTypes.string,
    id: PropTypes.string,
    width: PropTypes.string,
    autoFocus: PropTypes.bool
};

const defaultProps = {
    size: 'medium',
    kind: 'primary',
    type: 'button'
};

class Button extends Component {
    getContent() {
        return this.props.content || this.props.children;
    }

    getWidth() {
        if (this.props.width) {
            return { width: this.props.width, paddingLeft: 'unset', paddingRight: 'unset' };
        }
    }

    render() {
        const { content, kind, className, width, ...buttonProps } = this.props;
        return (
            <button className={classnames('button', kind, className)} style={this.getWidth()} {...buttonProps}>
                {this.getContent()}
            </button>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;

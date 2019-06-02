import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const propTypes = {
    id: PropTypes.string.isRequired,
    progress: PropTypes.number,
    onClick: PropTypes.func,
    onSlide: PropTypes.func
};

class ProgressBar extends Component {
    getContent() {
        return this.props.content || this.props.children;
    }

    onClick = e => {
        const { onClick, onSlide } = this.props;
        const rect = document.getElementById(this.props.id).getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        this.offset = _.round(rect.left + scrollLeft);
        this.offsetWidth = e.target.offsetWidth;
        if (onClick) {
            const location = (e.clientX - this.offset) / this.offsetWidth;
            onClick(e, location);
        }
        if (onSlide) {
            document.addEventListener('mousemove', this.onSlide);
            document.addEventListener('mouseup', this.removeEventListeners);
        }
    };

    onSlide = e => {
        const location = (e.clientX - this.offset) / this.offsetWidth;
        this.props.onSlide(e, location);
    };

    removeEventListeners = () => {
        document.removeEventListener('mousemove', this.onSlide);
        document.removeEventListener('mouseup', this.removeEventListeners);
    };

    render() {
        return (
            <div className="progress-wrapper" id={this.props.id} onMouseDown={this.onClick}>
                <div
                    className="progress"
                    id="progress"
                    style={{
                        width: `${_.round(this.props.progress * 100)}%`
                    }}
                />
            </div>
        );
    }
}

ProgressBar.propTypes = propTypes;
export default ProgressBar;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';

import Button from './Button';
import ProgressBar from './ProgressBar';

const MOBILE_WIDTH = 460;

const propTypes = {
    stepSet: PropTypes.object
};

class Steps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStepIndex: 0,
            totalSteps: _.size(props.stepSet.steps),
            mobile: window.innerWidth <= MOBILE_WIDTH,
            imageLoading: true
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleKeyDown = ({ keyCode: key }) => {
        // forwards
        if (key === 39 || key === 40) {
            this.handleNextClick();
        }
        // backwards
        if (key === 37 || key === 38) {
            this.handleBackClick();
        }
    };

    handleWindowResize = ({ currentTarget: { innerWidth } }) => {
        this.setState({ mobile: innerWidth <= MOBILE_WIDTH });
    };

    handleSliderClick = (_e, location) => {
        if (location < 0) {
            location = 0;
        } else if (location >= 1) {
            location = 0.99;
        }
        const newStepIndex = _.floor(location * this.state.totalSteps);
        if (this.state.currentStepIndex !== newStepIndex) {
            this.setState({ currentStepIndex: newStepIndex, imageLoading: true });
        }
    };

    onImageLoad = () => {
        this.setState({ imageLoading: false });
    };

    getImageLoading() {
        if (this.state.imageLoading) {
            return <div className="image-placeholder" />;
        }
    }

    getImage({ image, imageAltText }) {
        return (
            <img
                src={image}
                alt={imageAltText}
                className={classnames('image', { loaded: !this.state.imageLoading })}
                onLoad={this.onImageLoad}
            />
        );
    }

    getMobileStep({ title, description, image, imageAltText }) {
        return (
            <div className="mobile-step">
                <div className="text">
                    <h4 className="steps-title">{this.props.stepSet.title}</h4>
                    <h1 className="title">{title}</h1>
                    <p className="description">{description}</p>
                </div>
                <div className="image-container">
                    {this.getImageLoading()}
                    {this.getImage({ image, imageAltText })}
                </div>
                <div className="navigation-panel">
                    {this.getNavButtons()}
                    {this.getProgressBar()}
                </div>
            </div>
        );
    }

    getCurrentStep() {
        const { title, description, image, imageAltText } = this.props.stepSet.steps[this.state.currentStepIndex];
        if (this.state.mobile) {
            return this.getMobileStep({ title, description, image, imageAltText });
        }
        return (
            <div className="desktop-step">
                <div className="image-container">
                    {this.getImageLoading()}
                    {this.getImage({ image, imageAltText })}
                </div>
                <div className="text">
                    <h4 className="steps-title">{this.props.stepSet.title}</h4>
                    <h1 className="title">{title}</h1>
                    <div className="description-wrapper">
                        <p className="description">{description}</p>
                    </div>
                    {this.getNavButtons()}
                    {this.getProgressBar()}
                </div>
            </div>
        );
    }

    getProgressBar() {
        return (
            <ProgressBar
                id="steps-progress"
                progress={(this.state.currentStepIndex + 1) / this.state.totalSteps}
                onClick={this.handleSliderClick}
                onSlide={this.handleSliderClick}
            />
        );
    }

    handleBackClick = () => {
        if (this.state.currentStepIndex > 0) {
            this.setState(({ currentStepIndex }) => ({ currentStepIndex: currentStepIndex - 1, imageLoading: true }));
        }
    };

    getBackButton() {
        return (
            <Button
                key="back"
                width="10em"
                kind="secondary"
                onClick={this.handleBackClick}
                disabled={this.state.currentStepIndex <= 0}>
                Back
            </Button>
        );
    }

    handleNextClick = () => {
        if (this.state.currentStepIndex < this.state.totalSteps - 1) {
            this.setState(({ currentStepIndex }) => ({ currentStepIndex: currentStepIndex + 1, imageLoading: true }));
        }
    };

    getNextButton() {
        return (
            <Button
                key="next"
                width="10em"
                onClick={this.handleNextClick}
                disabled={this.state.currentStepIndex >= this.state.totalSteps - 1}>
                Next
            </Button>
        );
    }

    getNavButtons() {
        return (
            <div className="buttons">
                {this.getBackButton()}
                {this.getNextButton()}
            </div>
        );
    }

    render() {
        return <div className="steps">{this.getCurrentStep()}</div>;
    }
}

Steps.propTypes = propTypes;
export default Steps;

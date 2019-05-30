import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import _ from 'lodash';

const propTypes = {
    steps: PropTypes.array
};

class Steps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStepIndex: 0,
            totalSteps: _.size(props.steps)
        };
    }

    getCurrentStep() {
        const currentStep = this.props.steps[this.state.currentStepIndex];
        return (
            <div className="step">
                <img src={currentStep.image} alt={currentStep.imageAltText} className="image" />
                <div className="text">
                    <h1 className="title">{currentStep.title}</h1>
                    <div className="description-wrapper">
                        <p className="description">{currentStep.description}</p>
                    </div>
                    {this.getNavButtons()}
                    <div className="progress-wrapper">
                        <div
                            className="progress"
                            style={{
                                width: `${_.round(((this.state.currentStepIndex + 1) / this.state.totalSteps) * 100)}%`
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }

    handleBackClick = () => {
        this.setState(({ currentStepIndex }) => ({ currentStepIndex: currentStepIndex - 1 }));
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
        this.setState(({ currentStepIndex }) => ({ currentStepIndex: currentStepIndex + 1 }));
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

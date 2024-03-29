import React from 'react';
import './sass/app.scss';
import Steps from './Steps';
import InstructionSteps from './InstructionSteps';

function App() {
    return (
        <div className="app-container">
            <Steps stepSet={InstructionSteps} />
        </div>
    );
}

export default App;

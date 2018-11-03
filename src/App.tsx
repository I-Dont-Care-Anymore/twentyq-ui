import * as React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage';

class App extends React.Component {
    public render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact={true} component={LandingPage} />
                </div>
            </Router>
        );
    }
}

export default App;

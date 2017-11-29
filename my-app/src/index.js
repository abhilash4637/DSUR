import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route ,browserHistory  } from 'react-router';
import App from './App';
import Submit from './components/submit-component';
import { Provider } from 'react-redux'
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/submit" component={Submit} />
    </Router>
    {/*<App />*/}
</Provider>, document.getElementById('root'));
registerServiceWorker();

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponenet from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAxLr0160rH6W4D8iV1HRzy6nF2cxxUaTI',
            authDomain: 'manager-6799c.firebaseapp.com',
            databaseURL: 'https://manager-6799c.firebaseio.com',
            projectId: 'manager-6799c',
            storageBucket: 'manager-6799c.appspot.com',
            messagingSenderId: '50758507401'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
        return (
            <Provider store={store}>
                <RouterComponenet />
            </Provider>
        );
    }
}

export default App;

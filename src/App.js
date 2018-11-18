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
            apiKey: 'api_key',
            authDomain: 'yourapp.firebaseapp.com',
            databaseURL: 'https://yourapp.firebaseio.com',
            projectId: 'yourapp',
            storageBucket: 'yourapp.appspot.com',
            messagingSenderId: 'sender_id'
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

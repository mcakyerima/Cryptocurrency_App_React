import React from 'react'; 
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
//hook ant design css engine
import 'antd/dist/antd.css';

// create a provider and hook the store to it and wrap App whith it to have acces to the store variable
import { Provider } from 'react-redux';
import store from './App/store';

ReactDOM.render(
    // we hug our App with Router in order to use <Link/> of react-router-dom
    <Router>
        <Provider store = {store}>
            <App/>
        </Provider>
        
    </Router> ,
     document.getElementById('root'));
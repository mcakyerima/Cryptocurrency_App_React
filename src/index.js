import React from 'react'; 
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
//hook ant design css engine
import 'antd/dist/antd.css';

ReactDOM.render(
    // we hug our App with Router in order to use <Link/> of react-router-dom
    <Router>
        <App/>
    </Router> ,
     document.getElementById('root'));
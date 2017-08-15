import 'babel-polyfill';
import render from 'react-dom';
import React,{PropTypes} from 'react';
import route from './route';
import {Router,browserHistory} from 'react-router'; //REMEMBER THAT browserHistory IS USED FOR MODERN BROWSERS THAT SUPPORT HTML5 PUSH STATE(),FOR MORE http://html5.gingerhost.com/



render(
<Router history={browserHistory} route={route}/>,
document.getElementById('app')
);


//so in nutshell..application starts at index.js .this calls route.js.Route js calls app.js,and any one i.either home or about is called as props inside it needs to be updated.

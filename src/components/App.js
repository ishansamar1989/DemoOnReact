import React,{PropTypes} from 'react';
import {Link} from 'react-router';
import HomePage  from './home/HomePage';
import AboutPage from './about/AboutPage';

class App extends React.Component{
render(){
return(
<div className="container-fluid">
<h1>Header here..</h1>
{this.props.children}
</div>
    );
   }
  }

  App.propTypes={
    children:PropTypes.object.isRequired
  };

export default App;

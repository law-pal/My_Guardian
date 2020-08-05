import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import News from './Components/News';
import Opinion from './Components/Opinion';
import Sports from './Components/Sports';
import Culture from './Components/Culture';
import Lifestyle from './Components/Lifestyle';

class App extends Component {
  render() {
    return(
        <Router>
            <div className='container'>
                <ul className='navbar'>
                    <li>
                        <Link to='/'>News</Link>
                    </li>
                    <li>
                        <Link to='/Opinion'>Opinion</Link>
                    </li>
                    <li>
                        <Link to='/Sports'>Sports</Link>
                    </li>
                    <li>
                        <Link to='/Culture'>Culture</Link>
                    </li>
                    <li>
                        <Link to='/Lifestyle'>Lifestyle</Link>
                    </li>
                </ul> 

                <Switch>
                    <Route exact path='/' component={News}/>
                        
                    <Route path='/Opinion'  component={Opinion}/>
                  
                    <Route path= '/Sports'  component={Sports}/>
                      
                    <Route path= '/Culture' component={Culture}/>

                    <Route path = '/Lifestyle' component={Lifestyle}/>
                    
                </Switch>
            </div>
    </Router>
    );
  }
}

export default App;

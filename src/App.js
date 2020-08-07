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
                <div className='topNavBar'>
                    <h1 className='h1topNavBar'>Support The Guardian</h1>
                    <h3 className='h3topNavBar'>Support our journalism with a year-end gift</h3>
                    <div className='buttons'>
                        <button type='button' className='buttonOne'>Contribute</button>
                        <button type='button' className='buttonOne'>Suscribe</button>
                    </div>
                    <ul className='navbar'>
                        <li>
                            <Link className='mainNavBar' to='/'>News</Link>
                        </li>
                        <li>
                            <Link className='mainNavBar' to='/Opinion'>Opinion</Link>
                        </li>
                        <li>
                            <Link className='mainNavBar' to='/Sports'>Sports</Link>
                        </li>
                        <li>
                            <Link className='mainNavBar' to='/Culture'>Culture</Link>
                        </li>
                        <li>
                            <Link className='mainNavBar' to='/Lifestyle'>Lifestyle</Link>
                        </li>
                    </ul> 
                </div>

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

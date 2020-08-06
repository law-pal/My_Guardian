import React, {Component} from 'react'
import imgOne from '../images/5472.jpg'
import imgTwo from '../images/3000.jpg'
import imgThree from '../images/image.22cd2214.jpg'

class News extends Component {
    render() {
        return(
            <div>
                <div>
                    <ul className='subnav'>
                        <li>
                            <a href='#'>US</a>
                        </li>
                        <li>
                            <a href='#'>Elections 2020</a>
                        </li>
                        <li>
                            <a href='#'>World</a>
                        </li>
                        <li>
                            <a href='#'>Enviroment</a>
                        </li>
                        <li>
                            <a href='#'>Soccer</a>
                        </li>
                        <li>
                            <a href='#'>US Politics</a>
                        </li>
                        <li>
                            <a href='#'>Bussiness</a>
                        </li>
                        <li>
                            <a href='#'>Tech</a>
                        </li>
                        <li>
                            <a href='#'>Science</a>
                        </li>
                    </ul>
                </div>
                <div className='politics'>
                    <div className='box-1'>
                        <h1>Politic news</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed. Lacinia quis vel eros donec ac odio tempor orci dapibus.</p>
                    </div>

                    <div className='box-2'>

                    <div className='children-1'>
                        <div>
                            <h1>Politic news</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed. Lacinia quis vel eros donec ac odio tempor orci dapibus.</p>
                        </div>
                        <img className='imgOne' src={imgOne}/>
                    </div>

                        <ul className='children-2'>
                            <li>
                                <a href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                            </li>
                            <li>
                                <a href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                            </li>
                            <li>
                                <a href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                            </li>
                        </ul>

                    <div className='children-3'>
                        <img className='imgTwo' src={imgTwo}/>
                        <div>
                            <ul>
                                <li className='list-1'>
                                    <a href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                                </li><br/>
                                <li className='list-1'>
                                    <a href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                                </li><br/>
                                <li className='list-1'>
                                    <a href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                                </li>
                            </ul> 
                        </div>
                    </div>

                    <div className='children-4'>
                        <div>
                            <h1>2020 will be an epic year for America</h1>
                            <h1>Help us reach our 1.5m goal</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed. Lacinia quis vel eros donec ac odio tempor orci dapibus.</p>
                        </div>
                        <div>
                            <img className='imgThree' src={imgThree}/>
                        </div>
                    </div>

                    </div>

                    <div className='box-3'>
                        <ul className='item-1'>
                            <li>
                                <a href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                            </li><br/>
                            <li>
                                <a href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                            </li><br/>
                            <li>
                                <a href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default News;
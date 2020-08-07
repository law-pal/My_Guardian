import React, {Component} from 'react'
import imgOne from '../images/5472.jpg'
import imgTwo from '../images/3000.jpg'
import imgThree from '../images/image.22cd2214.jpg'
import imgFour from '../images/4000.jpg'
import imgFive from '../images/3039.jpg'

class News extends Component {
    render() {
        return(
            <div>
                <div>
                    <ul className='subnav'>
                        <li>
                            <a className='anchor' href='#'>US</a>
                        </li>
                        <li>
                            <a className='anchor' href='#'>Elections 2020</a>
                        </li>
                        <li>
                            <a className='anchor' href='#'>World</a>
                        </li>
                        <li>
                            <a className='anchor' href='#'>Enviroment</a>
                        </li>
                        <li>
                            <a className='anchor' href='#'>Soccer</a>
                        </li>
                        <li>
                            <a className='anchor' href='#'>US Politics</a>
                        </li>
                        <li>
                            <a className='anchor' href='#'>Bussiness</a>
                        </li>
                        <li>
                            <a className='anchor' href='#'>Tech</a>
                        </li>
                        <li>
                            <a className='anchor' href='#'>Science</a>
                        </li>
                    </ul>
                </div>
                
                <div className='politics'>

                    <div className='box-1'>
                        <h1>Headlines</h1>
                        <h2></h2>
                        <h3></h3>
                    </div>

                    <div className='box-2'>

                        <div className='children-1'>
                            <div>
                                <h1 className='h1-politic'>Politic news</h1>
                                <p className='p-politic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed. Lacinia quis vel eros donec ac odio tempor orci dapibus.</p>
                            </div>
                            <img className='imgOne' src={imgOne}/>
                        </div>

                            <ul className='children-2'>
                                <li>
                                    <a className='anchorOne' href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                                </li>
                                <li>
                                    <a className='anchorOne' href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                                </li>
                                <li>
                                    <a className='anchorOne' href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                                </li>
                            </ul>

                            <div className='children-3'>
                                <img className='imgTwo' src={imgTwo}/>
                                <div>
                                    <ul className ='parent-list-1'>
                                        <li className='list-1'>
                                            <a className='anchor' href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Id leo in vitae turpis massa sed. Lacinia quis vel eros donec ac odio.</a>
                                        </li><br/>
                                        <li className='list-2'>
                                            <a className='anchor' href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Id leo in vitae.</a>
                                        </li><br/>
                                        <li className='list-3'>
                                            <a className='anchor' href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                                        </li>
                                    </ul> 
                                </div>
                            </div>
                        
                            <div className='children-4'>
                                <div className='trumpbernie'>
                                    <a className='anchor' href="#">
                                        <h1>2020 will be an epic year for America</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa sed. Lacinia quis vel eros donec ac odio tempor orci dapibus.</p>
                                    </a>
                                </div>
                            </div>

                    </div>

                    <div className='box-3'>
                            <div className='item-1'>
                                <div className='item-1-child-one'>
                                    <a className='anchor' href='#'>
                                    </a>
                                </div>
                                <div className='item-1-child-two'>
                                    <a className='anchor' href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporId leo in vitae turpis massa sed. Lacinia quis vel eros donec ac odio tempor orci dapibus.</a>
                                </div>
                                <div className='item-1-child-three'>
                                    <a className='anchor' href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporId leo in vitae turpis massa sed. Lacinia quis vel eros donec ac odio tempor orci dapibus.</a>
                                </div>
                            </div>

                            <div className='boxThreediv'>
                                <div className='divchild-one'>
                                <a className='anchordiv' href='#'></a>
                                </div>
                                <div className='divchild-two'>
                                <a className='anchordiv' href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                                </div>
                                <div className='divchild-three'>
                                <a className='anchordiv' href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default News;
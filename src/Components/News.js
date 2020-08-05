import React, {Component} from 'react'

class News extends Component {
    render() {
        return(
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
        );
    }
}

export default News;
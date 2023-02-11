import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="Stars">
            <div className="App">
                <li>
                    <figure className='book'>

                        <ul className='hardcover_front'>
                            <li className="textOnCover">

                                    <p>Приятные записки </p>
                                    <p>Для любимой</p>
                                    <p>Лисы</p>

                                {/*<img src="img/cover.jpg" alt="" width="100%" height="100%"/>*/}
                            </li>
                            <li></li>
                        </ul>

                        <ul className='page'>
                            <li></li>
                            <li>
                                <a className="btn" href="#">Download</a>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <ul className='hardcover_back'>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul className='book_spine'>
                            <li></li>
                            <li></li>
                        </ul>
                    </figure>
                </li>
            </div>
        </div>
    );
}

export default App;

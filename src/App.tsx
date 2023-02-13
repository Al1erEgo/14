import React, {useState} from 'react';
import './App.css';
import lisa from './images/lisa.png';
import {compliments} from "./texts/complimentsBase";

function App() {

    const [isBig, setIsBig] = useState<boolean>((window.innerHeight > 719 && window.innerWidth > 559))

    const date = new Date()

    const stringMonth = new Intl.DateTimeFormat("en", {
        month: "long"
    }).format(date)

    const numberDayOfMonth = new Intl.DateTimeFormat("en", {
        day: "numeric"
    }).format(date)

    const currentDate = new Intl.DateTimeFormat("ru-RU", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
        }).format(date)
            .split(' ')
                .map( (str, i) => i===0 || i=== 2 ? str.split('').map((s,i)=> i === 0 ? s.toUpperCase() : s).join('') : str)
                    .join(' ')

    const complimentToShow: string = compliments[stringMonth][+numberDayOfMonth - 1]

    const fontSizeToCompliment = () => {
        const complimentLength = complimentToShow.split('').length
        const bookSizeMultiplier = isBig ? 1.5 : 1
        const fontSize = complimentLength < 100 ? `${bookSizeMultiplier*1.6}em` : `${bookSizeMultiplier*1.1}em`
        return fontSize
    }

    window.addEventListener("resize", ()=>{
        (window.innerHeight > 719 && window.innerWidth > 559) !== isBig && setIsBig((window.innerHeight > 719 && window.innerWidth > 559))
    })

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

                                <img className='foxImage' src={lisa} alt=""/>
                            </li>
                            <li></li>
                        </ul>

                        <ul className='page'>
                            <li></li>
                            <li>
                                <div className='messageContainer'>
                                    <p className='Date'>{currentDate}</p>
                                    <p className='Message' style={{"fontSize":fontSizeToCompliment()}}>{complimentToShow}</p>
                                </div>
                                {/*<a className="btn" href="#">Download</a>*/}
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

import React, { useState } from 'react'

export default function CARD(props) {
    const [text, setText] = useState('Read More');
    const [rm, setRm] = useState(true);
    const desc = `${rm ? props.tour.info.substring(0, 200) + '...' : props.tour.info}`;
    const handleClick = () => {
        setRm(!rm);
        if (text === 'Read More') setText('Show Less');
        else setText('Read More');
    }
    return (
        <div className="card">
            <img src={props.tour.image} alt="" className='image' />
            <div className="price">{'₹'+props.tour.price}</div>
            <h2>{props.tour.name}</h2>
            <div className="description">{desc} <span onClick={handleClick} className='Rdme'>{text}</span></div>
            <div className='btn-cont'><button onClick={() => { props.fnc(props.tour.id) }} className='red-btn'>Not Interested</button></div>
        </div>
    )
}

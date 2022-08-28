import React, {useState} from 'react'
import './App.css';
import fan from './assets/fan.png'
import skyline from './assets/skyline.png'
import eiffel from './assets/eiffel_tower_claude_monet.png'
import flower from './assets/flower_garden_paul_cezanne.png'
import house from './assets/house_claude_monet.png'
import shop from './assets/shop_with_lamps_claude_monet.png'
import square from './assets/town_square_paul_cezanne.png'
import view from './assets/view_from_mountain_paul_cezanne.png'

import {ReactComponent as CloseIcon} from './assets/icons/close.svg'

function App() {
    return (
        <div className="App">
            <h1>Fan Gogh - AI-generated impressionist art</h1>
            <p>! Work in progress !</p>
            <p>All paintings done in Midjourney by @sofvanh unless otherwise noted</p>
            <p>Art free to use, credit appreciated</p>
            <div className="flex-container">
                <img src={fan} />
                <img src={skyline} />
                <img src={eiffel} />
                <img src={flower} />
                <img src={house} />
                <img src={shop} />
                <img src={square} />
                <img src={view} />
            </div>
        </div>
    );
}

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: fan,
        },
        {
            id: 2,
            imgSrc: skyline,
        },
        {
            id: 3,
            imgSrc: view,
        },
        {
            id: 4,
            imgSrc: flower,
        },
        {
            id: 5,
            imgSrc: house,
        },
        {
            id: 6,
            imgSrc: shop,
        }
    ]
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
        <div className={model? "model open": "model"}>
            <img src={tempImgSrc} />
            <CloseIcon onClick={() => setModel(false)}/>
        </div>
            <div className="gallery">
                {data.map((item, index) => {
                    return (
                        <div className="pic" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '100%' }} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Gallery;

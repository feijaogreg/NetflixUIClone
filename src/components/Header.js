import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="">
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="">
                    <img src="https://blogs.studentlife.utoronto.ca/lifeatuoft/files/2015/02/FullSizeRender.jpg" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}
import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css'
import brain from './Brain.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilty className='br3 shadow-2' scale={1} perspective={900} reset={true} style={{ height: 150, width: 150 }}>
                <div className='pa3'>
                    <img style={{ paddingTop: '5px' }} alt='logo' src={brain} />
                    </div>
            </Tilty>
        </div>
    );
};

export default Logo;
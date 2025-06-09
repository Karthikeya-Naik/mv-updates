import React from 'react'
import './Dropdown.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const DropdownServices = () => {

    const [menu, setMenu] = useState(false);
    const handleClick = () => (setMenu(!menu));

    return (
        <>
            

                <ul onClick={handleClick} className={menu ? 'dropdown-menu clicked ' : 'dropdown-menu text-[14px] z-[2] shadow-[2px] text-center transition-all duration-500 ease-in hover:block'} >
                    <li className='p-2 border-[1px] border-bottom' >
                        <Link to='/services/academia' onClick={() => setClick(false)}>ACADEMIA</Link>
                    </li>
                    <li className='p-2 border-[1px] border-bottom'>
                        <Link to='/services/industry' onClick={() => setClick(false)}>INDUSTRY</Link>
                    </li>
                </ul>

        </>
    )
}

export default DropdownServices
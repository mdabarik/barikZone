

import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import Link from "../Link/Link";
import { useState } from 'react';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { path: '/', id: 'Home' },
        { path: '/about', id: 'About' },
        { path: '/services', id: 'Services' },
        { path: '/contact', id: 'Contact' },
        { path: '/products', id: 'Products' },
        { path: '/practice', id: 'Practice' }
    ];

    const handleOpenCloseBtn = () => {
        setOpen(!open);
    }

    return (
        <nav className='bg-base-300 text-base-content p-4 shadow-lg'>
            <div onClick={() => setOpen(!open)}>
                {
                    (open === false)   
                    ? <HiMenuAlt1 className='text-2xl md:hidden'></HiMenuAlt1>
                    : <AiOutlineClose className='text-2xl md:hidden'></AiOutlineClose>
                }
            </div>
            <ul className={`md:flex absolute md:static bg-base-300 duration-1000 ${open ? 'top-18' : '-top-60'}`}>
                {
                    routes.map(route => <Link 
                        key={route.id}
                        handleOpenCloseBtn={handleOpenCloseBtn}
                        route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;
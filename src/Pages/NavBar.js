import  React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavBar() {
    return (
        <header>
            <div className="container mx-auto flex justify-between">
                <nav className='flex'>
                    <NavLink to='/' exact className='inflex-flex items-center py-6 px-3 mr-4'>
                        Home
                    </NavLink>
                    <NavLink to='/post'className='inflex-flex items-center py-6 px-3 mr-4'>
                        Blog Posts
                    </NavLink>
                    <NavLink to='/Projects'className='inflex-flex items-center py-6 px-3 mr-4'>
                        Projects
                    </NavLink>
                    <NavLink to='/About'className='inflex-flex items-center py-6 px-3 mr-4'>
                        About Me!
                    </NavLink>
                    
                </nav>
            </div>
        </header>
    )
}
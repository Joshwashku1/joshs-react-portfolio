import React from 'react';

export default function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <li className='nav-item'>
                <a
                  href='#home'
                  onClick={() => handlePageChange('Home')}
                  // If the current page is home we set the className to nav-link is active otherwise nav-link
                  className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                Home
                </a>
            </li>
            <li className='nav-item'>
                <a
                  href='#about'
                  onClick={() => handlePageChange('About')}
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                About
                </a>
            </li>
            <li className='nav-item'>
                <a
                  href='#blog'
                  onClick={() => handlePageChange('Blog')}
                  className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
                >
                Blog
                </a>
            </li>
            <li className='nav-item'>
                <a
                  href='#contact'
                  onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                Contact
                </a>
            </li>
        </ul>
    );
}
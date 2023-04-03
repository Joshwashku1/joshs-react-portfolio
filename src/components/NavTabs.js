import React from 'react';
import '../styles/header.css'

const styles = {
    headerStyle: {
      background: 'blue',
    },
    headingStyle: {
      fontSize: '100px',
    },
  };

export default function NavTabs({ currentPage, handlePageChange }) {
    return (
        <header style={styles.headerStyle} className="header">
            <h1>Joshua Hamann</h1>
            <ul className="nav nav-tabs">
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
                    href='#resume'
                    onClick={() => handlePageChange('Resume')}
                    // If the current page is home we set the className to nav-link is active otherwise nav-link
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                    Resume
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                    href='#portfolio'
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                    Portfolio
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
        </header>
    );
}
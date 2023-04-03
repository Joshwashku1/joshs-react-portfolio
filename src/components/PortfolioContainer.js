import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PortfolioContainer() {

    // set a state and default it home
    const [currentPage, setCurrentPage] = useState('About');

    // Method to check what the current state is
    const renderPage = () => {
        
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Contact />;
    }

    // This function will pass in the a page variable then set the state to the page
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* Create props to pass into NavTabs */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    );
}
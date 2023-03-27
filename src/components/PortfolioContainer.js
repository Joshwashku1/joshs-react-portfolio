import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {

    // set a state and default it home
    const [currentPage, setCurrentPage] = useState('Home');

    // Method to check what the current state is
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if(currentPage === 'Blog') {
            return <Blog />;
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
import Footer from "./Footer"
import Navbar from "./Navbar"
import React, { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      setIsActive(true);
    }, []);

    return (
        <>
            <Navbar />
            <div className={`fade-in ${isActive ? 'active' : ''} w-full sm:10/12 md:w-10/12 lg:w-10/12 mx-auto xl:w-10/12 2xl:w-10/12 flex flex-col`}>
                {children}
                <Footer />
            </div>
        </>
    )
}
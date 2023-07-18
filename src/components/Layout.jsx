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
            <div className={`fade-in ${isActive ? 'active' : ''} w-full md:10/12 mx-auto flex flex-col`}>
                {children}
                <Footer />
            </div>
        </>
    )
}
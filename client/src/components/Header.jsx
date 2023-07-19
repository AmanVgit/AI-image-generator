import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import "./header.css"

const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        // console.log(offset);
        if (offset > 73) {
            setScrolled(true);
            // console.log("set scrlled to 73---true");
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`main-header w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#ababab] ${scrolled ? "sticky-header" : ""}`}>
            <Link to="/">
                <img src={logo} alt="logo" className="w-28 object-contain" />
            </Link>

            <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
        </header>
    )
}

export default Header
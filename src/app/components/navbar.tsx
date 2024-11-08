import Link from "next/link";
import React from "react";


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navList">
                <li className="navItem">
                    <Link href="#home" aria-label="Home">
                        Home
                    </Link>
                </li>
                <li className="navItem">
                    <Link href="#product" aria-label="Product">
                        Product
                    </Link>
                </li>
                <li className="navItem">
                    <Link href="#about" aria-label="Contact">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

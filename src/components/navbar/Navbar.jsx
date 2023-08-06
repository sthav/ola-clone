import { useState } from "react";
import Hamburger from "../hamburger/Hamburger";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const handleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
        console.log("clicked")
    }


    const handleClose = () => {
        setHamburgerOpen(false)
    }


    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link">
                        <img src="/assets/ola_logo.jpg" alt="" />
                    </Link>
                    <div className="links">
                        <span>Ola S1</span>
                        <span>Ola Electric</span>
                        <span>Ola Futurefactory</span>
                    </div>
                </div>
                <div className="links2">
                    <span className="box">Book an Ola Cab</span>
                    <span className="box white">Free S1 Test Ride</span>
                    <div className="hamburger" onClick={handleHamburger}>
                        <Hamburger />
                    </div>
                    <div className={`vertmenu  ${hamburgerOpen ? 'open' : ''}`}>
                        <button className="x" onClick={handleClose}>X</button>
                        <div className="vertlinks">
                            <span>Book an Ola Cab</span>
                            <span>Drive with Ola</span>
                            <span>Ola S1</span>
                            <span>Ola Electric</span>
                            <span>Ola FutureFactory</span>
                            <span>Ola Corporate</span>
                            <span>Ola Foundation</span>
                            <span>Support</span>
                        </div>
                        <div className="vertimg">
                            <img src="/assets/pink-banner-mob.png" alt="" />
                        </div>
                        <div className="vertlin">
                            <span>Careers</span>
                            <span>Notices</span>
                            <span>Privacy</span>
                            <span>T&C</span>
                        </div>
                        <div className="vertsoc">
                            <div className="vertlogo">
                                <img src="/assets/ola_logo.jpg" alt="" />
                            </div>
                            <div className="verticons">
                                <img src="/assets/instagram.png" alt="" />
                                <img src="/assets/logo_youtube.png" alt="" />
                                <img src="/assets/twitter.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

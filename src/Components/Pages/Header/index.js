import React, { useEffect, useRef, useState } from "react";
import { Row, Navbar, Nav } from "react-bootstrap";
import HeaderStyle from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosContact } from "react-icons/io";

const Header = () => {
    const [responsiveNav, setResponsiveNav] = useState(false)
    const [showNavItems, setShowNavItems] = useState(false)

    const navRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 767) {
                setResponsiveNav(true);
            } else {
                setResponsiveNav(false);
                setShowNavItems(false)
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setShowNavItems(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <HeaderStyle>
                <Row className="header_navbar_container">
                    <Navbar collapseOnSelect expand="lg" className="navbar_container">
                        <Navbar.Brand href="#home">AgriTech</Navbar.Brand>
                        <div ref={navRef} className={responsiveNav ? "nav_iconList_container" : "nav_list_container"}>
                            {responsiveNav && <GiHamburgerMenu onClick={() => setShowNavItems(!showNavItems)} />}
                            {(!responsiveNav || showNavItems) &&
                                <Nav className={showNavItems ? "responsive_nav_items" : "nav_items"}>
                                    {showNavItems &&
                                        <div className="responsive_contact_details">
                                            <div>
                                                <IoIosContact className="contact_profile_icon" />
                                            </div>
                                            <div>
                                                <p className="contact_name">Guhan</p>
                                                <p className="contact_number">6383463850</p>
                                            </div>
                                        </div>
                                    }
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">Features</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                                </Nav>
                            }
                        </div>
                    </Navbar>
                </Row>
            </HeaderStyle>
        </>
    )
}

export default Header;
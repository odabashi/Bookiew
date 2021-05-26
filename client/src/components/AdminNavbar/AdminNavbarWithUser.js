import React from 'react';
import '../Navbar/Navbar.css';
import MiniLogo from "../../assets/logos/minilogo.png";
import TextLogo from "../../assets/logos/textlogo.png";
import AdminPanelLogo from "../../assets/logos/adminpanellogo.png";
import {Link} from 'react-router-dom';

import { FaSignOutAlt } from 'react-icons/fa'

const AdminNavbarWithUser = () => {

    return(
        <div className='navbarAdmin' id='nav'>
            <section className='navbarLeftSection'>
                <div className='navbarLogoWrapper'>
                    <Link 
                        className='navbarLogoWrapper'
                        to="/adminpanel"
                        smooth="true"
                        offset={0}
                        duration={500}> 
                        <img src={MiniLogo} className='navbarLogoImage' alt='Bookiew Logo'/>
                        <img src={TextLogo} className='navbarLogoText' alt='Bookiew Logo'/>
                        <div className='adminPanelVerticalBreakline' />
                        <img src={AdminPanelLogo} className='AdminPanelLogo' alt='Bookiew AdminPanel Logo'/>
                    </Link>
                </div>
            </section>
            <section className='navbarMiddleSection'>
            <div className='navLinksContainer'>
                    <ul className='navLinksWrapper'>
                        <li className='navLinkItem'>
                            <Link 
                                className='navLink'
                                to="/adminpanel"
                                smooth="true"
                                offset={-70}
                                duration={500}> 
                                Add New Book
                            </Link>
                        </li>
                        <li className='navLinkItem'>
                            <Link 
                                className='navLink'
                                to="/adminpanel"
                                smooth="true"
                                offset={-70}
                                duration={500}> 
                                Received Recommendations
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='navbarRightSection'>
                <button className='navbarLoginButton'>
                    <Link 
                        className='navLink'
                        to="/adminpanel"
                        smooth="true"
                        offset={-70}
                        duration={500}> 
                        Log out
                        <FaSignOutAlt className='navbarLogoutIcon' 
                                color="#ffffff" 
                                size={24}/>
                    </Link>
                </button>
            </section>
        </div>
    )
}

export default AdminNavbarWithUser;
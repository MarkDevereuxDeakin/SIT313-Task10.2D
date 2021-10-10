import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
//import { Input, Menu, Segment } from 'semantic-ui-react'
import './BottomNavBar.css';

function BottomNavBar()
{
    return( 
        <div className='bottom-navbar-container'>
            <div className='newsletter-text'>
                <h3>Newsletter Sign-up:</h3>
            </div>         
            <form className='newsletter-email-input'>
                <input type="text" id="email-input" name="email-input" placeholder='Email.... '></input>                
            </form>
            <div>
                <button className='newsletter-email-button button-outline-primary button-primary'>Subscribe</button>
            </div>
            <div className='social-container-1'>
                <h3>Connect With Us</h3>
            </div>         
            <div className='social-container-2'>                         
                <a href='https://www.youtube.com' className='youtube social'>
                    <FontAwesomeIcon icon={faYoutube} size='2x'></FontAwesomeIcon>
                </a>
                <a href='https://www.facebook.com' className='facebook social'>
                    <FontAwesomeIcon icon={faFacebook} size='2x'></FontAwesomeIcon>
                </a>
                <a href='https://www.Twitter.com' className='twitter social'>
                    <FontAwesomeIcon icon={faTwitter} size='2x'></FontAwesomeIcon>
                </a>
                <a href='https://www.instagram.com' className='instagram social'>
                    <FontAwesomeIcon icon={faInstagram} size='2x'></FontAwesomeIcon>
                </a>
            </div>
        </div>       
    )

}

export default BottomNavBar;

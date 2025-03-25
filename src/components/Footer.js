import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import custom CSS

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">Follow us on social media</p>
        <div className="flex justify-center mt-4"> {/* Removed space-x-6 */}
          {/* Instagram Link */}
          <a href="https://www.instagram.com/yourprofile" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="social-icon mx-6"> {/* Added mx-4 (16px horizontal margin) */}
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </a>

          {/* LinkedIn Link */}
          <a href="https://www.linkedin.com/in/benjamin-rb/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="social-icon mx-6"> {/* Added mx-4 (16px horizontal margin) */}
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
        </div>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} Riot Climate Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
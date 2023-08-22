import './navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


function Navbar() {
  return (
    <div className='Navbar container grid grid-cols-6 gap-4 items-center'>
      <div className="logo col-start-1 col-end-3">
        <p>🐼codepanda</p>
      </div>
      <div className="socials col-end-7 col-span-2 flex justify-end space-x-6">
        <FontAwesomeIcon className='fa-2xl' icon={faGithub} />
        <FontAwesomeIcon className='fa-2xl' icon={faLinkedin} />
        <FontAwesomeIcon className='fa-2xl' icon={faTwitter} />
      </div>
    </div>
  );
}

export default Navbar;
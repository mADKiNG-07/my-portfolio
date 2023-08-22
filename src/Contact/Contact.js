import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <div className="Contact container mt-20">
      <div className='flex items-center justify-between'>
        <div className=''>
          <p className='heading'>Contact</p>
          <p className='text'>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>
        <div>
          <form action="#">
            <input className='name placeholder-zinc-600' type="text" placeholder='NAME' /><br />
            <input className='email placeholder-zinc-600' type="text" placeholder='EMAIL' /><br />
            <textarea className='message placeholder-zinc-600' name="message" id="" cols="30" rows="3" placeholder='MESSAGE'></textarea><br />
            {/* <input type="text" placeholder='MESSAGE' /><br /> */}
            <div className='btn'>
              <input className='button' type="submit" value="SEND MESSAGE" />
            </div>
          </form>
        </div>
      </div>
      <div>
        <hr className='line' />
        <div className='Navbar grid grid-cols-6 gap-4 items-center mt-10'>
          <div className="logo col-start-1 col-end-3">
            <p>🐼codepanda</p>
          </div>
          <div className="socials col-end-7 col-span-2 flex justify-end space-x-6">
            <FontAwesomeIcon className='fa-2xl' icon={faGithub} />
            <FontAwesomeIcon className='fa-2xl' icon={faLinkedin} />
            <FontAwesomeIcon className='fa-2xl' icon={faTwitter} />
          </div>
        </div>

      </div>
    </div>);
}

export default Contact;
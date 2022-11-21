import { useEffect, useState } from 'react';
import './Nav.css';

const content = {}

export default function Nav() {
  const [show, setShow] = useState(false);

  function navbarTransition() {
    window.scrollY > 100 ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', navbarTransition);
    return () => window.removeEventListener('scroll', navbarTransition);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img className='nav__logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='Netflix Logo' />
        <img className='nav__avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='User Avatar' />
      </div>
    </div>
  )
}
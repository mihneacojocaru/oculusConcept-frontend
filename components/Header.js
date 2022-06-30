import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Link as SLikin } from 'react-scroll';

function Header() {
  const navLinks = [
    {
      text: 'Home',
      link: 'home',
      offset: -80,
    },
    {
      text: 'Portfolio',
      link: 'portfolio',
      offset: -80,
    },
    {
      text: 'Team',
      link: 'team',
      offset: -80,
    },
    {
      text: 'Kontakt',
      link: 'kontakt',
      offset: -80,
    },
  ];

  const [navbarActive, setNavbarActive] = useState(false);

  useEffect(() => {
    if (navbarActive) document.body.style.overflow = 'hidden';
    if (!navbarActive) document.body.style.overflow = 'scroll';
  }, [navbarActive]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      let width = window.innerWidth;
      if (width >= 767) setNavbarActive(false);
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <header className="header">
      <div className="container headerContent">
        <Link href="/">
          <a className="header__logo">
            <Image src="/oculus-concept-logo.png" width={136} height={30} />
          </a>
        </Link>
        <nav className="navbar">
          <ul className={`navbar-nav ${navbarActive && 'active'}`}>
            {navLinks.map((e, index) => (
              <li key={index}>
                <SLikin
                  to={e.link}
                  spy={true}
                  smooth={true}
                  offset={e.offset}
                  duration={500}
                  onClick={() => setNavbarActive(false)}
                >
                  {e.text}
                </SLikin>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setNavbarActive(!navbarActive)}
            className={`nav-toggle-btn ${navbarActive && 'active'}`}
          >
            <span className="line one"></span>
            <span className="line two"></span>
            <span className="line three"></span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

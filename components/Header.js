import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Link as SLink } from 'react-scroll';
import { navLinks } from '../data/staticData';
import { useRouter } from 'next/router';

function Header() {
  const [navbarActive, setNavbarActive] = useState(false);

  const router = useRouter();

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
    <header className="header shadow-lg">
      <div className="container mx-auto headerContent">
        <Link href="/">
          <a className="header__logo">
            <Image
              src="/oculus-concept-logo-dark.png"
              width={180}
              height={40}
              alt="oculus concept logo"
            />
          </a>
        </Link>
        <nav className="navbar">
          <ul className={`navbar-nav ${navbarActive && 'active'}`}>
            {navLinks.map((e, index) => (
              <li key={index}>
                <SLink
                  to={e.link}
                  spy={true}
                  smooth={true}
                  offset={e.offset}
                  duration={500}
                  onClick={() => setNavbarActive(false)}
                >
                  {router.locale === 'de' ? e.text : e.textEn}
                </SLink>
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

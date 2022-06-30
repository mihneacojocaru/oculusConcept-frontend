import styles from '../styles/layout/Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div>Logo</div>
      <nav>Navbar</nav>
      <div>NavbarBtn</div>
    </div>
  );
}

export default Header;

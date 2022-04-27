import styles from './Sidebar.module.scss';
import samanthaImg from '../../assets/png/samantha.png';
import { useLocation, Link } from 'react-router-dom';

const sidebarNavLinks = [
  'dashboard',
  'expenses',
  'wallets',
  'summary',
  'accounts',
  'settings',
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <img src={samanthaImg} alt="samantha" />
            <p className={styles.notifications}>4</p>
          </div>
          <p className={styles.userName}>Samantha</p>
          <p className={styles.userEmail}>Samantha@email.com</p>
        </div>
        <nav className={styles.sidebarNav}>
          <ul>
            {sidebarNavLinks.map((sidebarNavLink) => {
                console.log(sidebarNavLink.charAt(0).toUpperCase() + sidebarNavLink.slice(1));//непонятно? -sidebarNavLink возвращает итак строковый элемент   
              return <li key={sidebarNavLink} className={styles.sidebarNavItem}>
                <Link
                  className={
                    location.pathname === `/${sidebarNavLink}`
                    ? styles.sidebarNavLinkActive
                    : styles.sidebarNavLink
                  }
                  to={`${sidebarNavLink}`}
                  >
                  {sidebarNavLink.charAt(0).toUpperCase() + sidebarNavLink.slice(1)} 
                  
                </Link>
                
              </li>;
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}

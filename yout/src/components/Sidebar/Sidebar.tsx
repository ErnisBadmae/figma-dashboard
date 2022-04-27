import styles from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <img src='' alt='samantha' />
          </div>
        </div>
      </aside>
    </>
  );
}

import type { User } from "./data";
import styles from "./styles.module.css";

interface UserCardProps {
  user: User;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const UserCard = ({ user, onEdit, onDelete }: UserCardProps) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h2 className={styles.name}>{user.name}</h2>
        <div className={styles.cardActions}>
          <button
            className={styles.editButton}
            onClick={() => onEdit(user.id)}
          >
            Editar Nombre
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => onDelete(user.id)}
          >
            Eliminar
          </button>
        </div>
      </header>
      <div className={styles.section}>
        <span className={styles.sectionTitle}>Contacto</span>
        <p className={styles.detail}>📧 {user.email}</p>
        <p className={styles.detail}>📞 {user.phone}</p>
        <p className={styles.detail}>
          🌐{" "}
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            {user.website}
          </a>
        </p>
      </div>
      <div className={styles.section}>
        <span className={styles.sectionTitle}>Ubicación</span>
        <p className={styles.detail}>
          {user.address.street}, {user.address.suite}
        </p>
        <p className={styles.detail}>
          {user.address.city}, {user.address.zipcode}
        </p>
        <p className={`${styles.detail} ${styles.geoDetail}`}>
          {user.address.geo.lat}, {user.address.geo.lng}
        </p>
      </div>
      <div className={styles.footer}>
        <span className={styles.sectionTitle}>Empresa</span>
        <p className={styles.companyName}>{user.company.name}</p>
        <p className={styles.catchPhrase}>"{user.company.catchPhrase}"</p>
        <span className={styles.bsBadge}>{user.company.bs}</span>
      </div>
    </article>
  );
};

import styles from "./styles.module.scss";
import { StarIcon, UserIcon, ReactIcon } from "assets/icons";

const SearchItem = ({ data }) => {
  const {
    name,
    owner,
    language,
    description,
    watchers_count,
    stargazers_count,
  } = data;

  return (
    <li className={styles.listItem}>
      <img
        src={owner.avatar_url ? owner.avatar_url : ReactIcon}
        alt="avatar icon"
        className={styles.logoImg}
      />
      <div className={styles.descriptionsWrap}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.author}>{owner.login}</p>
        <p className={styles.language}>{language}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.valuesWrap}>
        <div className={styles.item}>
          <img src={StarIcon} alt="star icon" />
          <p className={styles.starsValue}>
            <span>{stargazers_count}</span> stars
          </p>
        </div>
        <div className={styles.item}>
          <img src={UserIcon} alt="user icon" />
          <p className={styles.watchersValue}>{watchers_count} watchers</p>
        </div>
      </div>
    </li>
  );
};

export default SearchItem;

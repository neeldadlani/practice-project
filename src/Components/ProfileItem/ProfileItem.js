import React from "react";
import styles from './ProfileItem.module.css';

const ProfileItem = (props) => {


  return (
    <div className={styles.profileItem}>
        <p>{props.title} ({props.age})</p> 
    </div>
  );
};

export default ProfileItem;

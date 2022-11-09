import React from "react";
import styles from "./ProfileList.module.css";
import ProfileItem from "../ProfileItem/ProfileItem";

const ProfileList = (props) => {
  return (
    <div className={styles.profile_list}>
      {props.profileItem.map(item => (
        <ProfileItem title={item.username} age={item.age} id={item.id} />
      ))}
    </div>
  );
};

export default ProfileList;

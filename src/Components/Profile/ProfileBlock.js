import React, {useState} from "react";
import styles from "./ProfileBlock.module.css";
import ProfileForm from "./ProfileForm";
import ProfileList from "../Profile List/ProfileList";
import Modal from '../Modal/Modal';

const ProfileBlock = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    props.onAddUserDataHandler(userData);
  };

  const updateModalHandler = () => {
      setIsOpen(true);
  }

  // write function prop so that when add user name button is clicked, setIsOpen is set to true thus triggering the modal
  // conditionally render the Modal {isOpen && <Modal setIsOpen={setIsOpen} />}

  return (
    <div>
      <div className={styles.profile_block}>
        <ProfileForm onSaveUserData={saveUserDataHandler} onUpdateModal={updateModalHandler} />
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen}/>}
      <div className={styles.profile_block}>
        <ProfileList profileItem={props.items} />
      </div>
    </div>
  );
};

export default ProfileBlock;

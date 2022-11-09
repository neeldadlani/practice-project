import React, {useState} from "react";
import styles from "./ProfileForm.module.css";

const ProfileForm = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }


    const submitHandler = (event) => {
        event.preventDefault();
        const userData = {
            username: enteredUsername,
            age: enteredAge,
        }
        props.onSaveUserData(userData);
    }


  return (
    <form onSubmit={submitHandler}>
      <div className={styles.new_profile__controls}>
        <div className={styles.new_profile__control}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            onChange={usernameChangeHandler}
          />
        </div>
        <div className={styles.new_profile__control}>
          <label htmlFor="age">Age (Years)</label>
          <input 
          type="text" 
          name="age" 
          id="age" 
          placeholder="Enter your age" 
          onChange={ageChangeHandler}    
          />
        </div>
      </div>
      <div className={styles.new_profile__actions}>
        <button onClick={props.onUpdateModal}>Add User</button>
      </div>
    </form>
  );
};

export default ProfileForm;

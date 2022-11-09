import React, { useState } from "react";

// import styles from './App.module.css';

import ProfileBlock from "./Components/Profile/ProfileBlock";


function App() {
  const [userDataInfo, setUserDataInfo] = useState([{title: "", age:"", id:""}]);

  const addUserDataHandler = (userData) => {
    setUserDataInfo((prevUserDataInfo) => {
      return [userData, ...prevUserDataInfo];
    });
  };

  return (
    <div className="App">
      <ProfileBlock
        items={userDataInfo}
        onAddUserDataHandler={addUserDataHandler}
      />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  // null값 
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserObj(user);
      }
      setInit(true);
    });
  }, []);
  return <div>
    {init ? (
      <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
    ) : (
      "Initializing..."
    )}
    <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
  </div>
}

export default App;

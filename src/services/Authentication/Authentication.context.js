import firebase from "firebase";
import React, { useState, createContext } from "react";
import { LoginRequest, RegisterRequest } from "./Authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  firebase.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    if (!password || !email) {
      setError("Error : Please Fill All Data ");
      return;
    } else if (password.length < 5) {
      setError("Error : minmum password is 6 ");
      return;
    }
    setIsLoading(true);
    LoginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };
  const onRegister = (email, password, repeatedPassword) => {
    if (!password || !email || !repeatedPassword) {
      setError("Error : Please Fill All Data ");
      return;
    } else if (password !== repeatedPassword) {
      setError("Error : Passwords do not match ");
      return;
    } else if (password.length < 5) {
      setError("Error : minmum password is 6 ");
      return;
    }
    setIsLoading(true);
    RegisterRequest(email, password)
      .then((u) => {
        setIsLoading(false);
        setUser(u);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    setUser(null);
    setError(null);
    firebase.auth().signOut();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        setError,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

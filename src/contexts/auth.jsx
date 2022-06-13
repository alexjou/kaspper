import { useNavigation } from '@react-navigation/native';
import React, { createContext, useEffect, useState } from 'react';
import { fireAuth, fireStore } from '../firebase/firebase';
import { deletePersistAuth, getPersistAuth, setPersistAuth } from '../utils/localStorage';

export const AuthContext = createContext({ signed: false });

export const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  const loadStorage = async () => {
    const storageUsers = getPersistAuth();
    storageUsers.then(async (e) => {
      if (e != null) {
        setUser(e);
        navigation.navigate("Home")
      }
    });
  };

  useEffect(() => {
    loadStorage();
  }, []);

  const login = async (email, password) => {
    try {
      return await fireAuth
        .signInWithEmailAndPassword(email, password)
        .then(async (docs) => {
          return await fireStore
            .collection('users')
            .doc(docs.user.uid)
            .get()
            .then(async (doc) => {
              setPersistAuth(doc.data());
              setUser(doc.data());
              return true;
            })
        });
    } catch (e) {
      console.log(e)
      return false
    }
  };

  const createUser = async (data) => {
    const create = await fireAuth.createUserWithEmailAndPassword(data.email, data.password);
    if (create.user) {
      const { uid } = fireAuth.currentUser;
      await fireStore
        .collection('users')
        .doc(uid)
        .set({
          name: data.name,
          email: data.email,
          created_at: new Date,
        });
      setPersistAuth(data);
      setUser(data);
      return true;
    } else {
      return false;
    }
  };

  const createTodo = async (data) => {
    try {
      await fireStore
        .collection('todo')
        .doc()
        .set(data);
      return true;
    } catch (error) {
      return false;
    }
  };

  const getTodos = async () => {
    try {
      return await fireStore
        .collection('todo')
        .get()
        .then((querySnapshot) => {
          let arrayTodos = [];
          querySnapshot.forEach((doc) => {
            arrayTodos.push({ ...doc.data(), id: doc.id });
          });
          return arrayTodos;
        });
    } catch (error) {
      console.log(error)
    }
  };

  const updateTodo = async (data, id) => {
    try {
      await fireStore
        .collection('todo')
        .doc(id)
        .update({
          ...data,
          updated_at: new Date,
        });
      return true;
    } catch (error) {
      console.log(error)
      return false;
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fireStore
        .collection('todo')
        .doc(id)
        .delete();

      return true;
    } catch (error) {
      console.log(error)
      return false;
    }
  };

  const signOut = async () => {
    try {
      setUser({});
      await deletePersistAuth();
      navigation.navigate("Login")
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signOut,
        setUser,
        login,
        createUser,
        createTodo,
        getTodos,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setPersistAuth = async (data) => {
  try {
    const jsonValue = JSON.stringify(data)
    await AsyncStorage.setItem('@storageUser', jsonValue)
  } catch (e) {
    throw new Error(e);
  }
};

export const getPersistAuth = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storageUser');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw new Error(e);
  }
};

export const deletePersistAuth = async () => AsyncStorage.removeItem('@storageUser');
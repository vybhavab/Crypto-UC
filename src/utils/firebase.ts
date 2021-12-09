import { ref, get, set } from "firebase/database";
import { database } from "initFirebase";
import { User } from "types/firebase.types";

const hasUserData = async (googleId:string) : Promise<boolean> => {
    return await get(ref(database,`users/${googleId}`)).then((snapshot) => {
        if (snapshot.exists()) {
          return true;
        } else {
          return false;
        }
    }).catch((error) => {
        console.error(error);
        return false;
    });
}

const setData = (googleId: string, value: unknown) => {
    set(ref(database, `users/${googleId}`), value);
}

const getUserData = async (googleId: string): Promise<User | undefined>=> {
  return get(ref(database, `users/${googleId}`)).then((snapshot) => {
    if (snapshot.exists()){
      return snapshot.exportVal() as User;
    }else{
      return undefined
    }
  }).catch((err) => {
    console.error(err);
    return undefined;
  });
}

export { hasUserData, setData, getUserData }

import { ref, get, set } from "firebase/database";
import { database } from "initFirebase";
import { SendableAccounts } from "types/cardano.types";
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

const getAllUsers = async (currUser: string): Promise<SendableAccounts[]> => {
  const users: SendableAccounts[] = [] as SendableAccounts[];
  await get(ref(database, 'users')).then((snapshot) => {
    if(snapshot.exists()){
      const usersSnapshot = snapshot.val()
      Object.keys(usersSnapshot).forEach((val: string) => {
        if(val !== currUser){
          const userSnapshot = usersSnapshot[val];
          const user: SendableAccounts = {
            email: userSnapshot.email as string,
            name: userSnapshot.name as string,
            cardanoAcctAddress: userSnapshot.cardano_acct_addr as string,
            imageUrl: userSnapshot.imageUrl as string
          }
          users.push(user);
        }
      })
    }
  })
  return users;
}

export { hasUserData, setData, getUserData, getAllUsers }

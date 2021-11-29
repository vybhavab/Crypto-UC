import { ref, child, get, set } from "firebase/database";
import { database } from "initFirebase";

const getUserData = (googleId:string) : boolean => {
    get(child(ref(database), `users/${googleId}`)).then((snapshot) => {
        if (snapshot.exists()) {
        console.log("GET ",snapshot.val());
        return true;
        } else {
        console.log("No data available");
        return false;
        }
    }).catch((error) => {
        console.error(error);
        return false;
    });
    return false;
}

const setData = (googleId: string, value: unknown) => {
    set(ref(database, `users/${googleId}`), value);
}

export { getUserData, setData }

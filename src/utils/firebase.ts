import { ref, child, get, set } from "firebase/database";
import { database } from "initFirebase";

const getUserData = (googleId:string) : boolean => {
    get(child(ref(database), `users/${googleId}`)).then((snapshot) => {
        if (snapshot.exists()) {
        console.log(snapshot.val());
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

const setData = (path: string, value: unknown) => {
    set(ref(database, path), value);
}

export { getUserData, setData }
